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
    dbName = _DBMAP.DepartAnsCT;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.CT, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = _DBMAP.DepartAnsTA;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.TA, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = _DBMAP.DepartAnsTemp;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.Template, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = _DBMAP.DepartAnsLoc;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.Loc, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = _DBMAP.DepartAnsLink;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.DepartAns.Link, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = _DBMAP.DepartAnsTest;
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