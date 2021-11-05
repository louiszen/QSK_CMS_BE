const _base = require('$/IZOGears/__ZBase');
const _remote = require('$/remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');

const {Chalk, Response, Fs} = _base.Utils;

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(_param.subcat);

  let {data} = _opt;

  let deleteDocs = [];
  res = await db.Find(dbname, {}, data.skip, data.limit, data.fields, data.sort);
  if(res.Success){
    deleteDocs = res.payload.docs;
  }else{
    return Response.SendError(9001, res.payload);
  }

  deleteDocs = _.filter(deleteDocs, o => data.selected.includes(o._id));

  await Promise.all(_.map(deleteDocs, async (o, i) => {
    let path = o.link; 
    try { await Fs.unlink(path); }
    catch {}
  }));

  let rtn = await db.DeleteBulk(dbname, deleteDocs);

  console.log(Chalk.CLog("[-]", _opt.data._id, [_param.subcat, _param.action]));

  if(rtn.Success){
    return Response.Send(true, rtn.payload, "");
  }else{
    return Response.SendError(9001, rtn.payload);
  }

}