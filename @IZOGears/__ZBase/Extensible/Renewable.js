const Initializable = require('./Initializable');
const Time = require('../Utils/Time');

const _ = require('lodash');

class Renewable extends Initializable {

  /**
   * Check whether the module need to be updated
   * @readonly Do NOT change or override.
   */
  static async Update(){
    if(!await this.ReInit()){
      throw new Error("Not Initialized.");
    }
    let now = Time.Now();
    let expired = await this.needRenew(now);
    if(expired){
      try{
        let res = await this.Renew();
        if(res.Success){
          console.log(this.CLog("Module Updated. (" + Time.Lapse(now) + "s)", "[U][o]"));
          this.__LastRenew = now;
        }else{
          console.error(this.CLog("Module Update Failed", "[U][!]"));
        }
      }catch(e){
        console.error(this.CLog("Fatal Error Thrown during Module Update", "[U][x]"));
        console.error(e);
        if(this.__ThrowError){
          throw new Error(e);
        }
      }
    }
  }

  /**
   * condition of expiry
   * @readonly Do not change or override.
   * @param {moment.Moment} now 
   * @param {Number} time 
   * @param {String} unit 
   */
  static IsExpired(now, time, unit = 'minutes'){
    return _.isNull(this.__LastRenew) 
      || _.isUndefined(this.__LastRenew)
      || now.diff(this.__LastRenew, unit) > time;
  }

  /**
   * OVERRIDE Renew MAIN process
   */
  static async Renew(){
    console.log(this.CLog("Renew not implemented.", "[!]"));
    return {Success: true};
  }

  /**
   * OVERRIDE Condition of update
   * @param {moment.Moment} now 
   */
  static async needRenew(now){
    console.log(this.CLog("needRenew not implemented.", "[!]"));
    return false;
  }

}

module.exports = Renewable;