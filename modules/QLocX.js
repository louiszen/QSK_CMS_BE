const _base = require('../IZOGears/__ZBase');
const _remote = require('../remoteConfig');

const _ = require('lodash');
const EffectiveDocsX = require("./EffectiveDocsX");

const {Chalk, Time} = _base.Utils;

class QLocX {

  static async AllLocations(date){
    let res = await EffectiveDocsX.GetAllUnique("Location", date);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      throw Error(msg);
    }
    return res.payload;
  }

}

module.exports = QLocX;