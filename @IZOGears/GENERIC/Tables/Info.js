const _base = require('../../__ZBase');
const _remote = require('../../../remoteConfig');

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const { Response } = _base.Utils;

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

module.exports = async (_opt, _param) => {
  let rtn = {};
  let db = await _remote.BaseDB();

  let dbname = await _remote.GetDBName(_param.subcat);
  rtn = await db.DocCount(dbname);

  if (rtn.Success) {
    return Response.Send(true, rtn.payload, "");
  } else {
    return Response.SendError(9001, rtn.payload);
  }
};
