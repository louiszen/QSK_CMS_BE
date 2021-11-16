const _remote = require("../remoteConfig");
const ExpirableDB = require("../IZOGears/_CoreWheels/Extensible/ExpirableDB");
const _DBMap = require("../__SYSDefault/_DBMap");

class ${1} extends ExpirableDB{

  static async Init({db} = {db: null}){
    if(!db) {
      try{
        db = await _remote.BaseDB();
      }catch(e){
        return {Success: false};
      }
    }
    return await super.Init({
      db: db, 
      DBName: _DBMap.${2}$, 
      keep: ${3}, 
      mode: "M"
    });
  }

  /**
   * 
   * @param {*} doc 
   */
   static async Write(doc){
    await this.ReInit();
    
    try{
      let res = await this.Insert(doc);
      return res;

    }catch(e){
      console.error(this.CLog("[x]", "Cannot insert ${1}."));
      return {Success: false, payload: e};
    }
  }

}

module.exports = ${1};