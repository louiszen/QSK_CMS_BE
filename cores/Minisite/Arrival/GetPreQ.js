const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const GetEffectiveDoc = require('../../../modules/GetEffectiveDoc');
const GetAllEffectiveUniqueDocs = require('../../../modules/GetAllEffectiveUniqueDocs');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response, Time} = _base.Utils;
const _ = require('lodash');

module.exports = async (_opt, _param) => {

  let db = await _remote.RemoteDB();

  let date = _opt.data && _opt.data.date? Time.Parse(date) : Time.Now();
  
  let res = await GetEffectiveDoc("QOrder", "Order", date);
  if(!res.Success){
    let msg = res.message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
    return Response.Send(false, "", msg);
  }
  let orderDoc = res.payload.doc;
  let order = orderDoc.pre;

  let rtn = [];
  let defQ = ["_QLoc", "_QDate"];

  for(let i=0; i<order.length; i++){
    let o = order[i];
    if(defQ.includes(o)){
      res = await GetEffectiveDoc("DefaultQ", o, date);
    }else{
      res = await GetEffectiveDoc("Question", o, date);
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
      res = await GetAllEffectiveUniqueDocs("Location", date);
      if(!res.Success){
        let msg = res.message;
        console.log(Chalk.CLog("[!]", msg, [catName, actName]));
        throw Error(msg);
      }
      let allLocations = res.payload;
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