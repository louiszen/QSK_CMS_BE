const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();
  
  let res = await db.Backup();
  
  if(!res.Success){
    let msg = res.payload.Message;
    console.error(Chalk.CLog("[x]", msg, [catName, actName]));
    return Response.SendError(9001, msg);
  }

  console.log(Chalk.CLog("[<][o]", "CouchDB Successfully Backup-ed", [catName, actName]));

  return Response.Send(true, "", "");

};