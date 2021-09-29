const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const GetEffectiveDoc = require('../../../modules/GetEffectiveDoc');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');
const GetAllEffectiveUniqueDocs = require('../../../modules/GetAllEffectiveUniqueDocs');

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
      return Response.SendError(9001, msg);
    }

    let depTADoc = res.payload.doc;

    rtn.TA = {};
    rtn.TA.displayLastUpdate = depTADoc.displayLastUpdate;
    rtn.TA.display = depTADoc.display;
    rtn.TA.applink = depTADoc.applink;

    if(depTADoc.display.showDestinationOptions){

      /*
      let destLocs = [];      
      let resDL = await GetAllEffectiveUniqueDocs("DepartAnsLoc", now);
      if(!resDL.Success){
        let msg = resDL.message;
        console.log(Chalk.CLog("[!]", msg, [catName, actName]));
        return Response.SendError(9001, msg);
      }

      let destLocsDocs = resDL.payload;
      _.map(destLocsDocs, (o, i) => {
        destLocs.push(o.display);
      });

      rtn.TA.Locs = destLocs;
      */
    }

  }

  if(depAnsTemp.showCT){
    res = await GetEffectiveDoc("DepartAnsCT", "DepCT", now);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      return Response.SendError(9001, msg);
    }
    
    let depCTDoc = res.payload.doc;
    rtn.CT = {};
    rtn.CT.displayLastUpdate = depCTDoc.displayLastUpdate;
    rtn.CT.display = depCTDoc.display;

    let destTests = [];      
    let resVT = await GetAllEffectiveUniqueDocs("DepartAnsTest", now);
    if(!resVT.Success){
      let msg = resVT.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      return Response.SendError(9001, msg);
    }

    let destTestsDocs = resVT.payload;
    _.map(destTestsDocs, (o, i) => {
      destTests.push(o.display);
    });

    rtn.CT.VTests = destTests;
  }

  if(depAnsTemp.showOTH){
    let links = [];
    await Promise.all(_.map(depAnsTemp.links, async (o, i) => {
      res = await GetEffectiveDoc("DepartAnsLink", o.refID, now);
      if(!res.Success){
        let msg = res.message;
        console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      }
      let linkDoc = res.payload.doc;
      links.push(linkDoc.display);
    }));

    rtn.OTH = {};
    rtn.OTH.Links = links;

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

  

  return Response.Send(true, rtn, "");

  

}