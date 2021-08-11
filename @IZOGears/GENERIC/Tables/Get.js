const _base = require('../../__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(_param.subcat);

  let {data} = _opt;

  let {docID} = data;

  let res = await db.getDocQ(dbname, docID);
  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [_param.subcat, _param.action]));
    return Response.SendError(9001, res.payload);
  }

  return Response.Send(true, res.payload, "");

  

}