const _base = require("../../../IZOGears/_CoreWheels");
const ESubmission = require("../../../__SYSDefault/modules/ESubmission");

const {Response} = _base.Utils;

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
  
  let rtn = await ESubmission.ListAll();

  if(!rtn.Success){
    return Response.SendError(9001, rtn.payload);
  }
  return Response.Send(true, rtn.payload, "");

};