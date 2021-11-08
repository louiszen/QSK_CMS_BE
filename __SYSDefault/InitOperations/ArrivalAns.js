const _base = require("$/IZOGears/__ZBase");
const _remote = require("$/remoteConfig");
const DBDocs = require("../InitDocs/DBDocs");
const ConfigDocs = require("../InitDocs/ConfigDocs");

const _ = require("lodash");
const moment = require("moment");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response, Fs} = _base.Utils;

module.exports = async () => {
  
  let db = await _remote.BaseDB();
  let res;
  let dbName;

  try{
    dbName = ConfigDocs.DBNAME.ArrivalAns;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Template, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.APProc;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.APProc, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.DOCReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.DOCReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.ENTReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.ENTReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.QUAReq;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.QUAReq, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.Tips;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Components.Tips, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.Footnote;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.ArrivalAns.Miscellaneous.Footnote, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    ///

    dbName = ConfigDocs.DBNAME.IconDocs;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    let filenames = await Fs.readdir("Images/Icons");
    let docs = _.map(filenames, (o, i) => {
      let iconName = "Ico" + i.toString().padStart(4, "0");
      return {
        _id: iconName,
        refID: iconName,
        description: iconName + ": " + o,
        version: 3,
        lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
        effective: {
          Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
          End: null
        },
        link: "Images/Icons/" + o
      };
    });

    await Promise.all(_.map(docs, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    return Response.Send(true);

  }catch(e){
    console.error(Chalk.CLog("[x]", e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  

};