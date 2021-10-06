const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');
const EffectiveDocsX = require('../../../modules/EffectiveDocsX');

const {Chalk, Response, Time} = _base.Utils;

module.exports = async (_opt, _param) => {

  let rtn = {};
  let now = Time.Now();

  let res = await EffectiveDocsX.GetByRefID("DepartAnsTemp", "DepartAns", now);
  if(!res.Success){
    let msg = res.message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  let depAnsTemp = res.payload.doc;

  if(depAnsTemp.showTA){
    res = await EffectiveDocsX.GetByRefID("DepartAnsTA", "DepTA", now);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      return Response.SendError(9001, msg);
    }

    let depTADoc = res.payload.doc;

    if(depTADoc.display.showDestinationOptions){

      let destLocs = [];      
      let resDL = await EffectiveDocsX.GetAllUnique("DepartAnsLoc", now);
      if(!resDL.Success){
        let msg = resDL.message;
        console.log(Chalk.CLog("[!]", msg, [catName, actName]));
        return Response.SendError(9001, msg);
      }

      let destLocsDocs = resDL.payload;
      _.map(destLocsDocs, (o, i) => {
        destLocs.push(o.display);
      });

      rtn = destLocs;
    }

  }

  console.log(Chalk.CLog("[-]", "<MESSAGE>", [catName, actName]));

  return Response.Send(true, rtn, "");

  

}