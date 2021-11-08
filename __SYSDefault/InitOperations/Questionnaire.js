const _base = require("$/IZOGears/__ZBase");
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
    dbName = ConfigDocs.DBNAME.Question;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.Questionnaire.Question, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DefaultQ;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.Questionnaire.DefaultQ, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.QFlow;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.Questionnaire.QFlow, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.QOrder;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.Questionnaire.QOrder, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    return Response.Send(true);

  }catch(e){
    console.error(Chalk.CLog("[x]", e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  

};