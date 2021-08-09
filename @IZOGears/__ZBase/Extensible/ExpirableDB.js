
const Renewable = require('./Renewable');
const Time = require('../Utils/Time');
const DDGen = require('../Modules/Database/CouchDB/DesignDocs/Gen');

const CouchDB = require('../Modules/Database/CouchDB/CouchDB');

const _ = require('lodash');
const moment = require('moment');

/**
 * CouchDB classes for separating daily/monthly database 
 * with retrieving and housekeeping automation.
 */
class ExpirableDB extends Renewable {

  /**
   * Search for related databases with specified prefix
   * @override
   */
  static async Renew(){
    let res = await this.CouchDB.GetAllDatabases();
    if(!res.Success){ return {Success: false}; }

    this.dbnames = res.payload.filter(o => o.startsWith(this.DBName));
    return {Success: true};
  }

  /**
   * Condition for renew
   * @override
   * @param {moment.Moment} now 
   */
  static async needRenew(now){
    return _.isEmpty(this.dbnames) 
      || this.IsExpired(now, this.renewTime, "days");
  }

  /**
   * Initialization - call OnLoad once before using it
   * @note Do NOT directly call this method.
   * @override
   * @param {{
   *  db: CouchDB,
   *  DBName: String,
   *  keep: Number,
   *  mode: 'M' | 'D'
   * }} param0 
   */
  static async Init({db, DBName, keep = 120, mode = "M"}){
    this.CouchDB = db;
    this.DBName = DBName;
    this.mode = mode;
    this.keep = keep;
    this.renewTime = mode == "M"? 7 : 1;
    if(!this.CouchDB){
      return {Success: false};
    }
    return {Success: true};
  }

  /**
   * Return current DBName
   */
  static CurrentDBName(){
    let now = Time.Now();
    let dbName = this.DBName 
      + now.format(this.mode == "M" ? "YYYYMM" : "YYYYMMDD");
    return dbName;
  }

  /**
   * Return DBName at specific time
   * @param {moment.Moment} moment 
   * @returns 
   */
  static DBNameAt(moment){
    let dbName = this.DBName 
      + moment.format(this.mode == "M" ? "YYYYMM" : "YYYYMMDD");
    return dbName;
  }

  /**
   * Create new DB if not exists
   * @param {String} dbName 
   */
  static async CreateDB(dbName){
    if(this.dbnames.includes(dbName)) return;
    let res = await this.CouchDB.CreateDatabase(dbName, true);
    if(res.Success){
      await this.AddDesignDoc(dbName);
      await this.Renew();
    }
    return res;
  }

  /**
   * Add default create time design doc for sorting
   * @param {String} dbName 
   */
  static async AddDesignDoc(dbName){
    let payload = DDGen("inTime");
    let res = await this.CouchDB.Insert(dbName, payload);
    return res;
  }

  /**
   * Insert / Update documents to current database
   * @note It will update the field 'inTime' to current timestamp
   * @param {*} doc 
   */
  static async Insert(doc){
    try{
      await this.Update();
      let dbName = this.CurrentDBName();
      doc = {
        ...doc,
        inTime: Time.Now()
      };
      await this.CheckClear();
      await this.CreateDB(dbName);
      let res = await this.CouchDB.Update(dbName, doc);  
        
      return res;
    }catch(e){
      return {Success: false};
    }
  }

  /**
   * Get the document of specified ID
   * @param {String} ID 
   */
  static async Doc(ID){
    try{
      let res = await this.CouchDB.getDocQ(this.CurrentDBName(), ID);
      if(res.Success){
        let doc = res.payload;
        return doc;
      }
    }catch(e){
      return undefined;
    }
    return undefined;
  }

  /**
   * Check whether the existing databases expired and can be deleted, then delete it
   */
  static async CheckClear(){

    let now = Time.Now();
    let destroyed = false;
    await Promise.all(_.map(this.dbnames, async (o, i) => {
      let str = o.replace(this.DBName, "");
      let m = moment(str, (this.mode == "M" ? "YYYYMM" : "YYYYMMDD"));
      
      if(now.diff(m, "days") > this.keep){
        await this.CouchDB.DestroyDatabase(o);
        destroyed = true;
      }
    }));
    if(destroyed){
      await this.Renew();
    }
  }

  /**
   * 
   * @param {moment.Moment} from 
   * @param {moment.Moment} to 
   */
  static async DocsWithin(from, to){
    let beginInterval = moment(from.format(this.mode == "M" ? "YYYYMM" : "YYYYMMDD"));
    let endInterval = moment(to.format(this.mode == "M" ? "YYYYMM" : "YYYYMMDD"));

    
    let docs = [];
    let res;
    let cur = beginInterval;

    do {
      console.log(cur.format("YYYYMM"));
      res = await this.ListAt(cur, {$and: [{inTime: { $gte: from }}, {inTime: { $lte: to }}]}, "asc");
      if(res.Success){
        docs.push(...res.payload.docs);
      }
      if(this.mode == "M"){
        cur.add(1, "months");
      }else{
        cur.add(1, "days");
      }
    }while(cur <= endInterval);

    return docs.reverse();

  }

  /**
   * 
   * @param {moment.Moment} interval 
   * @param {String} sort 
   */
  static async ListAt(interval, selector = {inTime: { $gte: 0 }}, sort = "desc"){
    let dbname = this.DBNameAt(interval);
    let _sort = [{ inTime: sort }];
    let rtn = await this.CouchDB.Find(dbname, selector, undefined, undefined, undefined, _sort);
    return rtn;
  }

}

module.exports = ExpirableDB;