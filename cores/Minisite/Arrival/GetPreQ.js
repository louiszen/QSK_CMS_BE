const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response, Time} = _base.Utils;
const _ = require('lodash');
const EffectiveDocsX = require('../../../modules/EffectiveDocsX');
const { QLocX, QOrderX } = require('../../../modules');

module.exports = async (_opt, _param) => {

  let date = _opt.data && _opt.data.date? Time.Parse(date) : Time.Now();
  
  let order = await QOrderX.GetPre(date);

  let res;
  let rtn = [];
  let defQ = ["_QLoc", "_QDate"];

  for(let i=0; i<order.length; i++){
    let o = order[i];
    if(defQ.includes(o)){
      res = await EffectiveDocsX.GetByRefID("DefaultQ", o, date);
    }else{
      res = await EffectiveDocsX.GetByRefID("Question", o, date);
    }

    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      throw Error(msg);
    }

    let QDoc = res.payload.doc;
    delete QDoc._id;
    delete QDoc._rev;
    delete QDoc.version;
    delete QDoc.effective;
    delete QDoc.lastUpdate;
    delete QDoc.verdict;

    if(o === "_QLoc"){
      let allLocations = await QLocX.AllLocations(date);
      let locs = [];
      _.map(allLocations, (o, i) => {
        locs.push({
          refID: o.refID,
          display: o.display,
          priority: o.priority
        });
      });
      QDoc.Locs = locs;
    }

    rtn.push(QDoc);
  }

  console.log(Chalk.CLog("[-]", "GetPreQ", [catName, actName]));

  return Response.Send(true, rtn, "");

  

}