const _base = require('../IZOGears/__ZBase');
const _remote = require('../remoteConfig');

const _ = require('lodash');
const EffectiveDocsX = require("./EffectiveDocsX");

const {Chalk, Time} = _base.Utils;

class QIconX {

  static async GetIconDocs(){
    let db = await _remote.BaseDB();
    let icondb = await _remote.GetDBName("IconDocs");
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