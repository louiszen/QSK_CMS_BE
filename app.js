"use strict";
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const multer = require("multer");
const app = express();
const _ = require("lodash");

const _base = require("$/IZOGears/_CoreWheels");
const _config = require("$/__SYSDefault/SYSConfig");
const _remote = require("$/remoteConfig");

const cores = require("$/__SYSDefault/APIConfig/cores");
const inits = require("$/__SYSDefault/APIConfig/inits");

const ByPass = require("$/__SYSDefault/APIConfig/bypass");
const TempStore = require("$/IZOGears/COGS/Storage/TempStore");

const LRequest = require("$/IZOGears/COGS/Log/LRequest");
const LSignIn = require("$/IZOGears/COGS/Log/LSignIn");

const { Accessor } = require("$/IZOGears/_CoreWheels/Utils");
const ZGate = require("$/IZOGears/COGS/ZGate/ZGate");
const { v1 } = require("uuid");

const {Chalk, Response} = _base.Utils;

app.use(helmet()); //XSS protection 
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
  limit: "10mb"
}));
app.use(cors());
app.use("/Images", express.static("Images"));

Start();

/*Dynamic Routing*/
async function Start(){

  await _remote.OnLoad();

  //Auto Init
  if(_config.Init.OnStart){
    console.log(Chalk.Log("[-] Auto Initialization."));
    await cores.CommonAPI.Env.Init({});
  }
  //init all
  await ZGate.OnLoad();
  await LRequest.OnLoad();
  await LSignIn.OnLoad();
  await TempStore.OnLoad();

  await Promise.all(_.map(inits, async (o, i) => {
    await o.OnLoad();
  }));

  app.post("/:cat/:subcat/:action", multer().single("upload"), async (req, res) => {
    try {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      console.log(Chalk.Log("[<] Request << [" + req.params.action + "] " + Chalk.Color("on", "grey") + " [" + req.params.cat + Chalk.Color("/", "grey") + req.params.subcat +"]"));
      console.log(Chalk.Log("[<] Data << "));
      console.log(req.body);
      if(req.file){
        console.log(Chalk.Log("[<] File << "));
        console.log(req.file);
      }

      //Not Found 
      let func = Accessor.Get(cores, req.params.cat + "." + req.params.subcat + "." + req.params.action);
      if(!func){
        console.error(Chalk.Log("[x][>] Wrong Path Request >> "));
        res.sendStatus(404);
        return;
      }

      let validate;
      let username;

      if(!ByPass.Includes(req.params.cat, req.params.subcat, req.params.action)){
        //not bypass, need validate
        validate = await ZGate.Validate(req.body);
        if(!validate.Success){
          res.status(200);
          let message = validate.payload;
          console.error(Chalk.Log("[x][>] " + message));
          res.send(Response.SendError(4001, message + "\nPlease Login Again."));
          return;
        }

        username = validate.payload;
      }
  
      res.status(200);

      username = username || ("Anonymous-" + v1());
      
      //Call Object
      LRequest.Write(username, req);
      let rtn = await func(req.body, req.params, username, req.file, res);
      console.log(Chalk.Log("[o][>] Success Sent"));
      res.send(rtn);
  
    }catch(e){
      console.error(Chalk.Log("[x] Error :: "));
      console.error(e);
      res.send(Response.SendError(9001, e.message? e.message : e));
    }
  });
}

module.exports = app;
