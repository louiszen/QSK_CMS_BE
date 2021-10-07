const _base = require('../IZOGears/__ZBase');
const _remote = require('../remoteConfig');

const _ = require('lodash');
const EffectiveDocsX = require("./EffectiveDocsX");

const {Chalk, Time} = _base.Utils;

class QOrderX {

  static async GetPre(date){
    let res = await EffectiveDocsX.GetByRefID("QOrder", "Order", date);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      throw Error(msg);
    }
    let orderDoc = res.payload.doc;
    let order = orderDoc.pre;
    return order;
  }

  static async GetPost(date){
    let res = await EffectiveDocsX.GetByRefID("QOrder", "Order", date);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      throw Error(msg);
    }
    let orderDoc = res.payload.doc;
    let order = orderDoc.post;
    return order;
  }

}

module.exports = QOrderX;