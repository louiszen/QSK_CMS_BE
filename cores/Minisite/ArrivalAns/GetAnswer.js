const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const LUserRecord = require('../../../modules/LUserRecords');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let rtn = {};
  let {id, flag} = _opt.data;

  let doc = await LUserRecord.Doc(id, flag);

  console.log(doc);
  

  console.log(Chalk.CLog("[-]", "", [catName, actName]));

  return Response.Send(true, rtn, "");

  

}