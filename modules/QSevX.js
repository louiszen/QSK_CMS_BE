const _base = require('../IZOGears/__ZBase');
const _remote = require('../remoteConfig');

const _ = require('lodash');
const EffectiveDocsX = require("./EffectiveDocsX");

const {Chalk, Time} = _base.Utils;

class QSevX {

  static async getSevGroups(arrivalDate){
    let res = await EffectiveDocsX.GetAllUnique("SevGroup", arrivalDate);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [this.name]));
      throw Error(msg);
    }
    return res.payload;
  }

  static async Analyze(allLocs, arrivalDate){

    let sevGroups = await this.getSevGroups(arrivalDate);
    let highestLoc = [];
    await Promise.all(_.map(allLocs, async (o, i) => {
      let sevRes = await EffectiveDocsX.GetByRefID("Grouping", o.refID, arrivalDate);
      if(!sevRes.Success){
        let msg = sevRes.message;
        console.log(Chalk.CLog("[!]", msg, [this.name]));

        let db = await _remote.BaseDB();
        let configDBName = await _remote.GetDBName("Config");
        let configRes = await db.getDocQ(configDBName, "Landing");
        if(!configRes.Success){
          let msg = configRes.message;
          console.log(Chalk.CLog("[!]", msg, [this.name]));
          throw Error(msg);
        }

        let severity = configRes.payload.Config.defaultSeverity;
        let period = configRes.payload.Config.defaultRelevantPeriod;
        let relevant = true;
        if(o.date){
          relevant = Time.Parse(o.date).isAfter(Time.Add(arrivalDate, -period, 'days'));
        }
        o.severity = severity;
        o.relevant = relevant;
      }else{
        let sevDoc = sevRes.payload.doc;
        let relevantGroupDoc = _.find(sevGroups, o => o.refID === sevDoc.group);
        let severity = relevantGroupDoc.severity;
        let period = relevantGroupDoc.period;
        
        let relevant = true;
        if(o.date){
          relevant = Time.Parse(o.date).isAfter(Time.Add(arrivalDate, -period, 'days'));
        }
        o.severity = severity;
        o.relevant = relevant;
      }

      console.log("RefID: " + o.refID + " Severity: " + o.severity + " Relevant: " + o.relevant);
      
    }));
    
    let highestSeverity = 99;
    _.map(allLocs, (o, i) => {
      if(o.relevant && o.severity <= highestSeverity){
        highestSeverity = o.severity;
      }
    });
  
    _.map(allLocs, (o, i) => {
      if(o.relevant && o.severity == highestSeverity){
        highestLoc.push(o.refID);
      }
    });
  
    console.log("Highest Severity: " + highestSeverity);

    return {
      highestSeverity: highestSeverity,
      highestLoc: highestLoc
    }
  }

}

module.exports = QSevX;