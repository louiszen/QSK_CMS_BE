const _base = require('$/IZOGears/__ZBase');
const _remote = require('$/remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(catName);
  
  let res = await db.List2Docs(dbname, true);

  console.log(Chalk.CLog("[-]", "Get All Locations", [catName, actName]));

  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  let rtn = _.map(res.payload.rows, (o, i) => {
    return {
      refID: o.doc.refID,
      display: o.doc.display && o.doc.display.EN || "<No Display Text>"
    }
  });

  rtn = _.uniqBy(rtn, o => o.refID);

  return Response.Send(true, rtn, "");

}