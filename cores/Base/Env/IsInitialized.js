const _base = require('../../../IZOGears/__ZBase');
const _config = require('../../../_config');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let env = _opt.env || process.env.NODE_ENV;

  let db = await _remote.BaseDB();
  let rtn;

  console.log(Chalk.CLog('[-]', "Check project for [" + env + "]", [catName, actName]))

  try {
    //Create Config Database
    dbName = _config.Base.DBName.Config;
    rtn = await db.getDocQ(dbName, "INITIALIZED");
    if(rtn.Success) { 
      console.log(Chalk.CLog('[-]', "Project for [" + env + "] is Initialized", [catName, actName]))
      return Response.Send(true, true, "");
    }
    console.error(Chalk.CLog('[-]', "Project for [" + env + "] is NOT Initialized", [catName, actName]))
    return Response.Send(true, false, "");

  }catch(e){
    console.error(Chalk.CLog('[x]', e, [catName, actName]));
    return Response.SendError(9001, e);
  }

}