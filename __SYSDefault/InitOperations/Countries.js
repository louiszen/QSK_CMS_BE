const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");
const DBDocs = require("$/__SYSDefault/InitDocs/DBDocs");

const _ = require("lodash");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response, Fs, Excel} = _base.Utils;
const schema = require("./schema");
const _DBMAP = require("$/__SYSDefault/_DBMAP");

module.exports = async () => {
  
  let db = await _remote.BaseDB();
  let res;
  let dbName;
  let xlsxData;
  let docs;
  
  try{
    dbName = _DBMAP.Location;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    xlsxData = await Fs.readFile("__SYSDefault/__DATA/locations.xlsx");
    docs = await Excel.Excel2Docs(xlsxData, schema.Location);

    await Promise.all(_.map(docs, async (o, i) => {
      if(!o.effective.End){
        o.effective.End = null;
      }
      res = await db.Insert(dbName, o);
    }));

    dbName = _DBMAP.Grouping;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    xlsxData = await Fs.readFile("__SYSDefault/__DATA/location_severity.xlsx");
    docs = await Excel.Excel2Docs(xlsxData, schema.Grouping);

    await Promise.all(_.map(docs, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    dbName = _DBMAP.SevGroup;
    res = await db.DestroyDatabase(dbName);
    res = await db.CreateDatabase(dbName);
    if(!res.Success){
      throw new Error(res.payload.Error);
    }

    await Promise.all(_.map(DBDocs.Countries.SevGroup, async (o, i) => {
      res = await db.Insert(dbName, o);
    }));

    return Response.Send(true);

  }catch(e){
    console.error(Chalk.CLog("[x]", e, [catName, actName]));
    return Response.SendError(9001, e);
  }
  

};