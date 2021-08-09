const Renewable = require('./Renewable');
const Time = require('../Utils/Time');

/**
 * Provide Timed Architecture of Executable Blocks
 */
class Executable extends Renewable {

  /**
   * call Exec when you want to execute the Main
   * @readonly Do NOT change or override.
   * @param {*} params 
   * @returns {Promise<{
   *  Success: Boolean,
   *  payload: *
   * }>}
   */
  static async Exec(params){
    console.log(this.CLog("Executing..."));
    try{
      await this.Update();
      let now = Time.Now();
      let rtn = await this.Main(params);
      console.log(this.CLog("Executed in (" + Time.Lapse(now) + "s)"));
      return rtn;
    }catch(e){
      throw new Error(e);
    }
  }

  /**
   * OVERRIDE this class to fit your usage.
   * @note Do NOT directly call this method.
   * @param {*} params 
   * @returns {Promise<{
   *  Success: Boolean,
   *  payload: *
   * }>}
   */
  static async Main(params){
    let msg = "(Main) not implemented.";
    console.error(this.CLog("[x]", msg));
    throw new Error(msg);
  }

}

module.exports = Executable;