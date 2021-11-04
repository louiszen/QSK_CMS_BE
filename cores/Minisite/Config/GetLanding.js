const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');
const { Accessor } = require('../../../IZOGears/__ZBase/Utils');
const { QIconX } = require('../../../modules');

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName("Config");

  let res = await db.getDocQ(dbname, "Landing");

  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  console.log(Chalk.CLog("[-]", "<MESSAGE>", [catName, actName]));

  let rtn = res.payload.Config;

  //getIcons
  let icondocs = await QIconX.GetIconDocs();
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
    let icondoc = QIconX.GetLink(icondocs, iconRefID);
    if(icondoc){
      Accessor.Set(rtn, o, icondoc.link);
    }
  });


  return Response.Send(true, rtn, "");

  

}