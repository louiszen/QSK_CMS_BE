const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');
const { Accessor } = require('../../../IZOGears/__ZBase/Utils');

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.RemoteDB();
  let dbname = await _remote.GetDBName("Config");

  let res = await db.getDocQ(dbname, "Landing");

  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  console.log(Chalk.CLog("[-]", "<MESSAGE>", [catName, actName]));

  let rtn = res.payload.Config;

  //getIcons
  let icondb = await _remote.GetDBName("IconDocs");
  res = await db.List2Docs(icondb);
  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  let icondocs = res.payload;
  let accessors = [
    "Arrival.icon",
    "Departure.icon",
    "Transit.icon",
    "Answer.QUAReq.icon",
    "Answer.QUAReq.icon_selected",
    "Answer.DOCReq.icon",
    "Answer.DOCReq.icon_selected",
    "Answer.APProc.icon",
    "Answer.APProc.icon_selected",
    "Answer.Tips.icon",
    "Answer.Tips.icon_selected"
  ];

  _.map(accessors, (o, i) => {
    let iconRefID = Accessor.Get(rtn, o);
    let icondoc = _.find(icondocs, v => v.refID === iconRefID);
    if(icondoc){
      Accessor.Set(rtn, o, icondoc.link);
    }
  });


  return Response.Send(true, rtn, "");

  

}