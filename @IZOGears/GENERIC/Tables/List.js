const _base = require('../../__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');

const {Chalk, Response} = _base.Utils;

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

module.exports = async (_opt, _param) => {

  let rtn = {};
  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(_param.subcat);

  let {data} = _opt;

  if(!_.isEmpty(data.selector) && data.limit){
    data.limit = data.limit + 1;
  }

  console.log(Chalk.CLog("[-]", data.skip + "~" + data.limit, [_param.subcat, _param.action]));
  console.log(data.fields, data.sort, data.selector);

  rtn = await db.Find(dbname, 
    data.selector,
    data.skip, data.limit, 
    data.fields, data.sort
  );

  if(rtn.Success){
    return Response.Send(true, rtn.payload, "");
  }else{
    return Response.SendError(9001, rtn.payload);
  }

}