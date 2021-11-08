const _ = require("lodash");
const EffectiveDocsX = require("./EffectiveDocsX");
const QFlowX = require("./QFlowX");
const QLocX = require("./QLocX");

const moment = require("moment");

class QVerdictX {

  static async GetModVerdict(userRecord){
    let {userAns, arrivalDate, highestSeverity} = userRecord;

    let locDocs = await QLocX.AllLocations(arrivalDate);

    let flow = await QFlowX.GetBySeverity(highestSeverity, arrivalDate);
    let qPassed = QFlowX.GetQPassed(flow, userAns);

    let rtn = [];

    //_QDate
    let qDateRes = await EffectiveDocsX.GetByRefID("DefaultQ", "_QDate", arrivalDate);
    if(!qDateRes.Success) throw Error("_QDate");
    let qDateDoc = qDateRes.payload.doc;
    let qDateVerdict = {};
    _.map(qDateDoc.verdict, (o, i) => {
      qDateVerdict[i] = this.ReplaceText(o, userRecord, i, locDocs);
    });
    rtn.push(qDateVerdict);

    //_QLoc
    let qLocRes = await EffectiveDocsX.GetByRefID("DefaultQ", "_QLoc", arrivalDate);
    if(!qLocRes.Success) throw Error("_QLoc");
    let qLocDoc = qLocRes.payload.doc;
    let qLocVerdict = {};
    _.map(qLocDoc.verdict, (o, i) => {
      qLocVerdict[i] = this.ReplaceText(o, userRecord, i, locDocs);
    });
    rtn.push(qLocVerdict);

    //_QHKR & Others
    for(let i=0; i < qPassed.length; i++){
      let o = qPassed[i];
      let qRes = await EffectiveDocsX.GetByRefID("Question", o, arrivalDate);
      if(!qRes.Success) throw Error(o);
      let qDoc = qRes.payload.doc;
      let qVerdict = {};
      _.map(qDoc.verdict[userAns[o]? "yes": "no"], (v, x) => {
        qVerdict[x] = this.ReplaceText(v, userRecord, x, locDocs);
      });
      rtn.push(qVerdict);
    }

    return rtn;
    
  }

  static ReplaceText(text, userRecord, lang, locDocs){
    let rtn = text;
    let otherCap = {
      EN: "Other",
      TC: "其他",
      SC: "其他",
    };

    let {arrivalDate, highestLoc, relevantPeriod} = userRecord;
    //@date
    let locale = lang === "EN"? "en" : "zh_cn";
    rtn = rtn.replace("@date", moment(arrivalDate).locale(locale).format("LL"));
    //@loc
    let locstr = "";
    _.map(highestLoc, (o, i) => {
      let doc = _.find(locDocs, v => v.refID === o);
      
      if(i !== 0){
        locstr += ",";
      }
      if(!doc) locstr += otherCap[lang];
      else locstr += doc.display[lang];
    });
    rtn = rtn.replace("@loc", locstr);

    //@reldays
    rtn = rtn.replace("@reldays", relevantPeriod);

    return rtn;
    
  }

}

module.exports = QVerdictX;