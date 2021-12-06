const SYSGeneral = require("./__SYSDefault/SYSGeneral");
const Chalk = require("./IZOGears/_CoreWheels/Utils/Chalk/Chalk");

/**
 * @type {syscredentials}
 */
let SYSCredentials; 
let filename = "./" + SYSGeneral.ID.toLowerCase() + "_SYSCredentials";
try {
  SYSCredentials = require(filename);
  if(!SYSCredentials) throw Error();
  console.log(Chalk.Log("[-] Using " + filename + " as SYSCredentials."));
}catch{
  let msg = "[x] " + filename + " not found.";
  console.log(Chalk.Log(msg));
  throw Error(msg);
}
 
module.exports = SYSCredentials;