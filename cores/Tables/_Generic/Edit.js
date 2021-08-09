const _base = require('../../../@IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(_param.subcat);

  let rtn = await db.Insert(dbname, _opt.data);

  console.log(Chalk.CLog("[-]", _opt.data, [_param.subcat, _param.action]));

  if(rtn.Success){
    return Response.Send(true, rtn.payload, "");
  }else{
    return Response.SendError(9001, rtn.payload);
  }

}