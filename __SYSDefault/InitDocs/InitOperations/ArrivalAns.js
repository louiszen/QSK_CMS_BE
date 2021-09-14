const _base = require('../../../IZOGears/__ZBase');
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
  let dbName;

  try{
    dbName = ConfigDocs.DBNAME.ArrivalAns;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Template, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.APProc;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.APProc, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DOCReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.DOCReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.ENTReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.ENTReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.QUAReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.QUAReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.Tips;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.Tips, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.Footnote;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Miscellaneous.Footnote, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.IconDocs;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error)
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Miscellaneous.IconDocs, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    return Response.Send(true);

  }catch(e){
    console.error(Chalk.CLog('[x]', e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  

}