const _base = require('../IZOGears/__ZBase');
const _remote = require('../remoteConfig');

const {v4} = require('uuid');

class LUserRecord extends _base.Extensible.ExpirableDB {

  static async Init({db} = {db: null}){
    if(!db) {
      try{
        db = await _remote.RemoteDB();
      }catch(e){
        return {Success: false};
      }
    }
    return await super.Init({
      db: db, 
      DBName: await _remote.GetDBName('$UserRec'), 
      keep: 12, 
      mode: 'M'
    });
  }

  static async Write(userID, payload){
    await this.ReInit();
    let doc = {
      _id: userID, 
      ...payload
    };

    try{
      let res = await this.Insert(doc);
      if(!res.Success){
        throw new Error();
      }

    }catch(e){
      console.error(this.CLog("[x]", "Cannot insert Request Log."));
    }
  }

}

module.exports = LUserRecord;