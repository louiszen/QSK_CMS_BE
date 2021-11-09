require("dotenv").config();

if(!process.env.NODE_ENV){
  console.error(".env is not found");
  process.exit();
}

const _base = require("$/IZOGears/_CoreWheels");
const _config = require("$/__SYSDefault/SYSConfig");

const Version = require("$/Version");
const {Chalk, ZServer} = _base.Utils;

Chalk.Guide();

const app = require("./app");

Chalk.Break();
Chalk.Title(_config.General.Name + " (" + Version + ")");
ZServer.Start(_config.Server, app, _config.Debug.Console);
