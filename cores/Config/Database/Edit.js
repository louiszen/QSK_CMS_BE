const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require("lodash");
const _DBMAP = require("../../../__SYSDefault/_DBMAP");

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();

  let {DBNAME, ENV} = _opt.data;

  console.log(Chalk.CLog("[<][o]", "CouchDB Config Edit Request", [catName, actName]));
  
  let resDBNAME = await db.getDocQ(_DBMAP.Config, "DBNAME");
  let docDBNAME = resDBNAME.payload;
  delete docDBNAME._rev;

  //DBNAME
  let includeArray = [];
  _.map(DBNAME, (o, i) => {
    docDBNAME[o.id] = o.alias;
    if(o.included){
      includeArray.push(o.alias);
    }
  });

  let res = {};

  res = await db.Update(_DBMAP.Config, docDBNAME);
  if(!res.Success){
    let msg = "Cannot update DBNAME";
    console.error(Chalk.CLog("[x]", msg, [catName, actName]));
    return Response.Send(false, "", "");
  }

  let docDBConfig = await _remote.GetDatabase();
  docDBConfig.include = includeArray;

  docDBConfig.envs[process.env.NODE_ENV] = ENV;

  let doc = {
    _id: "Database",
    type: "Database",
    Config: docDBConfig
  };

  res = await db.Update(_DBMAP.Config, doc);
  if(!res.Success){
    let msg = "Cannot update Database Config";
    console.error(Chalk.CLog("[x]", msg, [catName, actName]));
    return Response.Send(false, "", "");
  }

  _remote.ClearCache();
  
  return Response.Send(true, "", "");

};