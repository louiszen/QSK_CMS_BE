'use strict'
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const multer = require('multer');
const app = express();
const _ = require('lodash');

const _base = require('./IZOGears/__ZBase');
const _config = require('./_config');
const _remote = require('./remoteConfig');
_remote.Init();

const cores = require('./__SYSDefault/APIConfig/cores');
const inits = require('./__SYSDefault/APIConfig/inits');

const ByPass = require('./__SYSDefault/APIConfig/bypass');
const TempStore = require('./IZOGears/Storage/TempStore');
const LRequest = require('./IZOGears/Log/LRequest');
const LUserRecord = require('./modules/LUserRecords');
const Authorize = require('./IZOGears/User/Authorize');
const { Accessor } = require('./IZOGears/__ZBase/Utils');

const {Chalk, Response} = _base.Utils;

app.use(helmet()); //XSS protection 
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
  limit: '10mb'
}));
app.use(cors());
app.use("/Images", express.static("Images"));

Start();

/*Dynamic Routing*/
async function Start(){

  //Auto Init
  if(_config.AutoInit){
    console.log(Chalk.Log("[-] Auto Initialization."));
    await cores.Base.Env.Init({});
  }
  //init all
  await LRequest.OnLoad();
  await LUserRecord.OnLoad();
  await TempStore.OnLoad();
  await Promise.all(_.map(inits, async (o, i) => {
    await o.OnLoad();
  }));

  app.post('/:cat/:subcat/:action', multer().single('upload'), async (req, res) => {
    try {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      console.log(Chalk.Log("[<] Receive [" + req.params.action + "] Request on [" + req.params.cat + "/" + req.params.subcat +"]"));
      console.log(Chalk.Log("[<] Data Received << "));
      console.log(req.body);
      if(req.file){
        console.log(Chalk.Log("[<] File Received << "));
        console.log(req.file);
      }

      //Not Found 
      let func = Accessor.Get(cores, req.params.cat + "." + req.params.subcat + "." + req.params.action);
      if(!func){
        console.error(Chalk.Log("[x][>] Wrong Path Request >> "));
        res.sendStatus(404);
        return;
      }
  
      //JWT Check
      let jwt = {};

      if(req.body.JWT){
        jwt = Authorize.Decode(req.body.JWT);

        let user = await Authorize.GetUserFromJWT(req.body.JWT);

        if(jwt.version !== user.Version){
          res.status(200);
          console.error(Chalk.Log("[x][>] Version Not Match. (Client: " + jwt.version + " Backend: " + user.Version + ")"));
          res.send(Response.SendError(4001, "Version Not Match. \nPlease Login Again."));
          return;
        }
  
        if (Authorize.IsExpired(req.body.JWT)) {
          res.status(200);
          console.error(Chalk.Log("[x][>] JWT Token Expired."));
          res.send(Response.SendError(4002, "JWT Token Expired. \nPlease Login Again."));
          return;
        }
      }else if(!req.body.JWT && !(ByPass.Includes(req.params.cat, req.params.subcat, req.params.action))){
        res.status(200);
        console.error(Chalk.Log("[x][>] No JWT Token"));
        res.send(Response.SendError(4003, "JWT Authorization Required. \nPlease Login Again."));
        return;
      }
  
      res.status(200);
      
      //Call Object
      LRequest.Write(jwt.username, req);
      let rtn = await func(req.body, req.params, req.file, res);
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
