const _base = require('../../../@IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');
const DBDocs = require('../DBDocs');
const ConfigDocs = require('../ConfigDocs');

const _ = require('lodash');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async () => {
  
  let db = await _remote.BaseDB();
  let res;
  
  try{
    dbName = ConfigDocs.DBNAME.Question;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.Logics.Question, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    dbName = ConfigDocs.DBNAME.QUAReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.Logics.QUAReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    dbName = ConfigDocs.DBNAME.BNEReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.Logics.BNEReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    dbName = ConfigDocs.DBNAME.APProc;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.Logics.APProc, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    dbName = ConfigDocs.DBNAME.Scenario;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.Logics.Scenario, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    return Response.Send(true);

  }catch(e){
    console.error(Chalk.CLog('[x]', e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  

}