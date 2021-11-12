require("dotenv").config();

if(!process.env.NODE_ENV){
  console.error(".env is not found");
  process.exit();
}

const _base = require("./IZOGears/_CoreWheels");
const SYSConfig = require("./__SYSDefault/SYSConfig");

const Version = require("./Version");
const {Chalk, ZServer} = _base.Utils;

Chalk.Guide();

const app = require("./app");


Chalk.Break();
Chalk.Title(SYSConfig.General.Name + " (" + Version + ")");
ZServer.Start(SYSConfig.Server, app, SYSConfig.Debug.Console);
