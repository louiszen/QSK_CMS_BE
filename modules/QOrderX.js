const _base = require("../IZOGears/_CoreWheels");

const EffectiveDocsX = require("../IZOGears/DataQueries/EffectiveDocsX");

const {Chalk} = _base.Utils;

class QOrderX {

  static async GetPre(date){
    let res = await EffectiveDocsX.GetByRefID("QOrder", "Order", date);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, this.name));
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
      console.log(Chalk.CLog("[!]", msg, this.name));
      throw Error(msg);
    }
    let orderDoc = res.payload.doc;
    let order = orderDoc.post;
    return order;
  }

}

module.exports = QOrderX;