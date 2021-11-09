const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");
const DBDocs = require("$/__SYSDefault/InitDocs/DBDocs");

const _ = require("lodash");

const path = require("path");
const _DBMAP = require("$/__SYSDefault/_DBMAP");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async () => {
  
  let db = await _remote.BaseDB();
  let res;
  let dbName;
  
  try{
    dbName = _DBMAP.Miscellaneous;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.Miscellaneous, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    return Response.Send(true);

  }catch(e){
    console.error(Chalk.CLog("[x]", e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  

};