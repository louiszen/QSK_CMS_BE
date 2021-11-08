const _base = require("$/IZOGears/__ZBase");
const _remote = require("$/remoteConfig");

const { v1 } = require("uuid");

const {Chalk, Response, Fs, Time} = _base.Utils;
const fpath = require("./path");

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

module.exports = async (_opt, _param, _file) => {

  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(_param.subcat);

  let data = JSON.parse(_opt.data);
  let uuid = v1();

  let path = fpath.Icons + "/" + uuid + ".png";
  //add _file
  await Fs.mkdir(fpath.Icons);
  await Fs.writeFile(path, _file.buffer);

  data.link = path;
  data.lastUpdate = Time.Now().toISOString();

  let rtn = await db.Insert(dbname, data);

  console.log(Chalk.CLog("[-]", _opt.data, [_param.subcat, _param.action]));

  if(rtn.Success){
    return Response.Send(true, rtn.payload, "");
  }else{
    return Response.SendError(9001, rtn.payload);
  }

};