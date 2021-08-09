const _base = require('../../../@IZOGears/__ZBase');
const _config = require('../../../_config');
const _remote = require('../../../remoteConfig');
const _init = require('../../../__SYSDefault/InitDocs');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require("lodash");
const Authorize = require('../../../@IZOGears/User/Authorize');

const {Chalk, Response} = _base.Utils;
const DDGen = _base.Modules.DesignDoc.Gen;

module.exports = async (_opt, _param) => {

  let env = _opt.env || process.env.NODE_ENV;

  let db = await _remote.BaseDB();
  let rtn;

  let sameAsBaseDB = _opt.sameAsBaseDB !== false; //default true

  let DBNAME = _init.ConfigDocs.DBNAME;

  console.log(Chalk.CLog('[-]', "Initialize project for [" + env + "]", [catName, actName]))

  try {
    //Create Config Database
    dbName = _config.Base.DBName.Config;
    rtn = await db.getDocQ(dbName, "INITIALIZED");
    if(rtn.Success) { throw new Error("Project already initialized.");}

    rtn = await db.DestroyDatabase(dbName);
    rtn = await db.CreateDatabase(dbName);
    if(!rtn.Success) {throw new Error(rtn.payload);}

    //Create User Database
    dbName = _config.Base.DBName.User;
    rtn = await db.DestroyDatabase(dbName);
    rtn = await db.CreateDatabase(dbName);
    if(!rtn.Success) {throw new Error(rtn.payload);}
    await Promise.all(_.map(_init.User, async (o, i) => {
      rtn = await db.Insert(dbName, o);
    }));
    
    //add dbname config
    dbName = DBNAME.Config;
    await Promise.all(_.map(_init.ConfigDocs, async (o, i) => {
      if(i == 'INITIALIZED') return;
      if(i == 'CouchDB') {
        let configdoc = o.Config.envs[env];
        if(sameAsBaseDB){
          if(process.env.BASE_DB_URL
             && process.env.BASE_DB_USERNAME
             && process.env.BASE_DB_PASSWORD){
            console.log(Chalk.CLog('[-]', "DB: Using ENV Settings...", [catName, actName]));
            configdoc = {
              BASE: process.env.BASE_DB_HTTP || "http://",
              USERNAME: process.env.BASE_DB_USERNAME,
              PASSWORD: process.env.BASE_DB_PASSWORD,
              URL: process.env.BASE_DB_URL,
            }
          }else{
            console.log(Chalk.CLog('[-]', "DB: Using Config Settings...", [catName, actName]));
            configdoc = _config.Base.CouchDB.envs[env];
          }
          
        }else{
          console.log(Chalk.CLog('[-]', "DB: Using Custom Settings...", [catName, actName]));
          configdoc = {
            BASE: (_opt.CouchDB && _opt.CouchDB.BASE) || configdoc.BASE,
            USERNAME: (_opt.CouchDB && _opt.CouchDB.USERNAME) || configdoc.USERNAME,
            PASSWORD: (_opt.CouchDB && _opt.CouchDB.PASSWORD) || configdoc.PASSWORD,
            URL: (_opt.CouchDB && _opt.CouchDB.URL) || configdoc.URL,
          }
        }
        o.Config.envs[env] = configdoc;
      }

      rtn = await db.Insert(dbName, o);
      if(!rtn.Success) { throw new Error(rtn.payload.Error);}
    })); 

    let BaseDB = await _remote.BaseDB();

    //Destroy All Z database 
    rtn = await BaseDB.GetAllDatabases();
    let zdb = _.filter(rtn.payload, o => o.startsWith("z"));
    await Promise.all(_.map(zdb, async (o, i) => {
      rtn = await BaseDB.DestroyDatabase(o);
    }));

    await Promise.all(_.map(_init.InitOperations, async (o, i) => {
      await o();
    }));


    //FINISH
    dbName = DBNAME.Config;
    rtn = await db.Insert(dbName, _init.ConfigDocs.INITIALIZED);

    _remote.ClearCache();
    Authorize.RefreshRemoteUsers();

    return Response.Send(true, rtn.payload, "");

  }catch(e){
    console.error(Chalk.CLog('[x]', e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  
}