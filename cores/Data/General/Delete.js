const _base = require("$/IZOGears/_CoreWheels");

const path = require("path");
const { Fs } = require("$/IZOGears/_CoreWheels/Utils");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let {datestr} = _opt.data;

  let backupDir = "./ΩRUNTIME/_backup/" + process.env.NODE_ENV + "/" + datestr;
  
  try{
    let res = await Fs.rmdir(backupDir);
    return Response.Send(true, res, "");

  }catch(e){
    let msg = "Cannot remove backup " + datestr;
    console.error(Chalk.CLog("[x]", msg, [catName, actName]));
    return Response.SendError(9001, msg);
  }
  

};