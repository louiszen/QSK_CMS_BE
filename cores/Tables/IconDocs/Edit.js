const _base = require("$/IZOGears/__ZBase");
const _remote = require("$/remoteConfig");

const {Chalk, Response, Fs, Time} = _base.Utils;

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

module.exports = async (_opt, _param, _file) => {

  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(_param.subcat);

  let data = JSON.parse(_opt.data);

  if(_file){
    let path = data.link;
    //add _file
    await Fs.writeFile(path, _file.buffer);
  }

  data.lastUpdate = Time.Now().toISOString();

  let rtn = await db.Update(dbname, data);

  console.log(Chalk.CLog("[-]", _opt.data, [_param.subcat, _param.action]));

  if(rtn.Success){
    return Response.Send(true, rtn.payload, "");
  }else{
    return Response.SendError(9001, rtn.payload);
  }

};