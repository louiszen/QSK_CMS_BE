const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");
const DBDocs = require("../InitDocs/DBDocs");
const ConfigDocs = require("../InitDocs/ConfigDocs");

const _ = require("lodash");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async () => {
  
  let db = await _remote.BaseDB();
  let res;
  let dbName;
  
  try{
    dbName = ConfigDocs.DBNAME.DepartAnsCT;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.CT, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DepartAnsTA;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.TA, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DepartAnsTemp;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.Template, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DepartAnsLoc;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.Loc, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DepartAnsLink;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.Link, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DepartAnsTest;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.VirusTest, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    return Response.Send(true);

  }catch(e){
    console.error(Chalk.CLog("[x]", e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  

};