const _base = require('$/IZOGears/__ZBase');
const _remote = require('$/remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();

  let configDBName = await _remote.GetDBName("Config");

  let res = await db.getDocQ(configDBName, "Landing");

  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  let newDoc = {
    ...res.payload,
    ..._opt.data
  };

  res = await db.Update(configDBName, newDoc);

  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  console.log(Chalk.CLog("[-]", "Update Config - Landing", [catName, actName]));

  return Response.Send(true, res.payload, "");

  

}