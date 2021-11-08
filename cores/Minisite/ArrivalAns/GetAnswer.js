const _base = require("$/IZOGears/_CoreWheels");

const path = require("path");
const LUserRecord = require("$/modules/LUserRecords");
const { EffectiveDocsX, QIconX, QVerdictX, QAnsX } = require("$/modules");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let rtn = {};
  let {id, flag} = _opt.data;

  let doc = await LUserRecord.Doc(id, flag);
  if(!doc) {
    let msg = "No record is found.";
    console.error(Chalk.CLog("[x]", msg, [catName, actName]));
    return Response.SendError(9001, msg);
  }
  let {arrivalDate, userAns} = doc;

  let ansRefID = doc.template;

  let res = await EffectiveDocsX.GetByRefID("ArrivalAns", ansRefID, arrivalDate);
  if(!res.Success){
    let msg = "Cannot get related documents.";
    console.error(Chalk.CLog("[x]", msg, [catName, actName]));
    return Response.SendError(9001, msg);
  }

  let tempDoc = res.payload.doc;
  let expired = res.payload.expired;

  rtn.canEntry = tempDoc.canEntry;
  rtn.expired = expired;
  rtn.userAns = userAns;
  rtn.displayLastUpdate = tempDoc.displayLastUpdate;
  //verdict 
  rtn.verdict = await QVerdictX.GetModVerdict(doc);

  if(!tempDoc.canEntry){
    return Response.Send(true, rtn, "");
  }

  let iconDocs = await QIconX.GetIconDocs();

  let allSections = ["QUAReq", "DOCReq", "ENTReq", "APProc", "Tips"];

  for(let i=0; i<allSections.length; i++){
    let o = allSections[i];
    let temp = [];
    if(tempDoc[o]){
      let fromTemp = tempDoc[o];
      for(let x=0; x<fromTemp.length; x++){
        let v = fromTemp[x];
        let ARes = await EffectiveDocsX.GetByRefID(o, v.refID, arrivalDate);
        if(!ARes.Success) throw Error("No " + o + ", RefID: " + v.refID);
        let AnsDoc = ARes.payload.doc;   
  
        let modAns = QAnsX.ModAns(tempDoc, AnsDoc, v.parameters, iconDocs);
        temp.push(modAns);
      }
    }
    rtn[o] = temp;
  }

  console.log(Chalk.CLog("[-]", "Answer " + id + " Generated.", [catName, actName]));

  return Response.Send(true, rtn, "");

  

};