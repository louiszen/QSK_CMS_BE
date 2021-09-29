const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const GetEffectiveDoc = require('../../../modules/GetEffectiveDoc');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');

const {Chalk, Response, Time} = _base.Utils;

module.exports = async (_opt, _param) => {

  let rtn = {};
  let now = Time.Now();

  let res = await GetEffectiveDoc("DepartAnsTemp", "DepartAns", now);
  if(!res.Success){
    let msg = res.message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  let depAnsTemp = res.payload.doc;
  rtn.prewordings = depAnsTemp.prewordings;

  if(depAnsTemp.showTA){
    res = await GetEffectiveDoc("DepartAnsTA", "DepTA", now);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
    }

    let depTADoc = res.payload.doc;
    if(depTADoc.display.showDestinationOptions){
      
    }

  }

  if(depAnsTemp.showCT){
    res = await GetEffectiveDoc("DepartAnsCT", "DepCT", now);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
    }

  }

  if(depAnsTemp.showOTH){
    _.map(depAnsTemp.links, (o, i) => {

    });

  }



  /*
    DepartAnsTemp: 'departanstemp',
    DepartAnsLoc: 'departansloc',
    DepartAnsTest: 'departanstest',
    DepartAnsLink: 'departanslink',
    DepartAnsTA: 'departansta',
    DepartAnsCT: 'departansct',
   */

  console.log(Chalk.CLog("[-]", "<MESSAGE>", [catName, actName]));

  

  return Response.Send(true, res.payload, "");

  

}