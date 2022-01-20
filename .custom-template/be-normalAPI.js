const _base = require("../../../IZOGears/_CoreWheels");
const _remote = require("../../../remoteConfig");
const _DBMAP = require("../../../__SYSDefault/_DBMAP");

const {Chalk, Response} = _base.Utils;

/**
 * 
 * @param {*} _opt 
 * @param {{
 *  cat: String,
 *  subcat: String,
 *  action: String
 * }} _param
 * @returns 
 */
module.exports = async (_opt, _param, _username) => {

  let rtn = {};
  let {data, addOns} = _opt;
  let {cat, subcat, action} = _param;

  let db = await _remote.BaseDB();

  console.log(Chalk.CLog("[-]", "<MESSAGE>", [cat, subcat, action]));

  return Response.Send(true, rtn, "");

  

}