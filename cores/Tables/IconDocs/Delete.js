const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");
const _DBMAP = require("$/__SYSDefault/_DBMAP");

const {Chalk, Response, Fs} = _base.Utils;

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();
  let dbname = _DBMAP.Config[_param.subcat];

  let data = _opt.data;

  let path = data.link; 
    //remove _file
  await Fs.unlink(path);

  let rtn = await db.Delete(dbname, _opt.data._id, _opt.data._rev);

  console.log(Chalk.CLog("[-]", _opt.data._id, [_param.subcat, _param.action]));

  if(rtn.Success){
    return Response.Send(true, rtn.payload, "");
  }else{
    return Response.SendError(9001, rtn.payload);
  }

};