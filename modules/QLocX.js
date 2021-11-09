const _base = require("../IZOGears/_CoreWheels");

const EffectiveDocsX = require("$/IZOGears/COGS/Queries/EffectiveDocsX");

const {Chalk} = _base.Utils;

class QLocX {

  static async AllLocations(date){
    let res = await EffectiveDocsX.GetAllUnique("Location", date);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, this.name));
      throw Error(msg);
    }
    return res.payload;
  }

}

module.exports = QLocX;