const BaseClass = require('../BaseClass');
const Time = require('../Utils/Time');

const _ = require('lodash');

class Initializable extends BaseClass {

  /**
   * OVERRIDE Initialization Scripts
   * as long as return {Success: boolean}
   * @note Do NOT directly call this method.
   * @param {*} params 
   * @returns {Promise<{Success: Boolean}>}
   */
  static async Init(params){
    return {Success: true};
  }

  /**
   * ReInit scripts, call before execution of other core functions
   * @readonly Do NOT change or override.
   */
  static async ReInit(){
    if(this.__INIT) return true;
    await this.OnLoad(this.__PARAMS);
    return this.__INIT;
  }

  /**
   * OnLoad scripts, call it once on starts up
   * @readonly Do NOT change or override.
   */
  static async OnLoad(params){
    this.__PARAMS = params;
    let now = Time.Now();
    try{
      let rtn = await this.Init(this.__PARAMS);
      if(rtn.Success){
        console.log(this.CLog("Module Initialized. (" + Time.Lapse(now) + "s)", "[U][o]"));
        this.__INIT = true;
      }else{
        console.error(this.CLog("Module Initialize Failed", "[U][x]"));
        this.__INIT = false;
      }
    }catch(e){
      console.error(this.CLog("Fatal Error Thrown during Module Initialization", "[U][x]"));
      console.error(e);
      this.__INIT = false;
      throw new Error(e);
    }
  }

  /**
   * If true, update will throw Error when fail
   * @param {Boolean} flag 
   */
  static SetThrowError(flag = true){
    this.__ThrowError = flag;
  }

}

module.exports = Initializable;