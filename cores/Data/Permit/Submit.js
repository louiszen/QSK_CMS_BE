const _base = require("../../../IZOGears/_CoreWheels");

const { v1 } = require("uuid");
const ESubmission = require("../../../__SYSDefault/modules/ESubmission");

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
  
  let {permitRefID, formData} = _opt.data;

  let applicationID = v1();

  //build doc
  let doc = {
    _id: applicationID,
    permitRefID: permitRefID,
    submitedBy: _username,
    formData: formData,
    status: 0
  };

  let res = await ESubmission.Write(doc);

  if(!res.Success){
    console.log(Chalk.CLog("[v]", "Submission " + applicationID + " refused.", [_param.subcat, _param.action]));
    return Response.Send(false, res.payload, "");
  }

  let rtn = applicationID;
  console.log(Chalk.CLog("[v]", "Submission " + applicationID + " accepted.", [_param.subcat, _param.action]));
  return Response.Send(true, rtn, "");

  

};