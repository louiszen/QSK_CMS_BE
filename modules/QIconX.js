const _remote = require("../remoteConfig");
const _DBMAP = require("$/__SYSDefault/_DBMAP");

const _ = require("lodash");

class QIconX {

  static async GetIconDocs(){
    let db = await _remote.BaseDB();
    let icondb = _DBMAP["IconDocs"];
    let res = await db.List2Docs(icondb);
    if(!res.Success){
      let msg = res.payload.Message;
      throw Error(msg);
    }
    return res.payload;
  }

  static GetLink(iconDocs, refID){
    return _.find(iconDocs, v => v.refID === refID);
  }

}

module.exports = QIconX;