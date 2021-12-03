const SYSCredentials = require("../SYSCredentials");
const envConfigs = require("./ENVConfig");
const Chalk = require("../IZOGears/_CoreWheels/Utils/Chalk/Chalk");

/**
 * @type {sysconfig}
 */
let config; 
try {
  config = envConfigs[SYSCredentials.ENV];
  if(!config) throw Error();
  console.log(Chalk.Log("[-] Using __SYSDefault/ENVConfig/" + SYSCredentials.ENV + ".js as SYSConfig."));
}catch{
  let msg = "[x] Config for [" + SYSCredentials.ENV + "] not found.";
  console.log(Chalk.Log(msg));
  throw Error(msg);
}

module.exports = config;