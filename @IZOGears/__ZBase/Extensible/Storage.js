const _ = require('lodash');

const BaseClass = require('../BaseClass');

/**
 * Local ID-field Storage
 */
class Storage extends BaseClass{

  constructor(){
    super();
    this.Store = {};
  }

  /**
   * 
   * @param {String} ID 
   * @returns 
   */
  Exists(ID){
    if(this.Store[ID]){
      return true;
    }
    return false;
  }

  /**
   * Get the field value
   * @param {String} ID 
   * @param {String} field 
   */
  Get(ID, field){
    if(this.Store[ID]){
      if(this.Store[ID][field] === undefined){
        return null;
      }
      return this.Store[ID][field].value;
    }
    return null;
  }

  /**
   * Set the field value
   * @param {String} ID 
   * @param {String} field 
   * @param {*} value 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  Set(ID, field, value, override = true, timer = -1){
    this.Store[ID] = this.Store[ID] || {};
    if(override || (this.Get(ID, field) == null || this.Get(ID, field) !== value)){
      this.Store[ID][field] = {
        value: value,
        timer: timer
      };
    }
  }

  /**
   * Get only the time count
   * @param {String} ID 
   * @param {String} field 
   * @returns {Number}
   */
  GetTimer(ID, field){
    if(this.Store[ID]){
      if(this.Store[ID][field] === undefined){
        return null;
      }
      return this.Store[ID][field].timer;
    }
    return null;
  }

  /**
   * Set only the time count
   * @param {String} ID 
   * @param {String} field 
   * @param {Number} timer 
   */
  SetTimer(ID, field, timer = -1){
    this.Store[ID] = this.Store[ID] || {};
    this.Store[ID][field] = {
      value: this.Get(ID, field),
      timer: timer
    };
  }

  /**
   * Set only the field value
   * @param {String} ID 
   * @param {String} field 
   * @param {*} value 
   */
  SetValue(ID, field, value){
    this.Store[ID] = this.Store[ID] || {};
    this.Store[ID][field] = {
      value: value,
      timer: this.GetTimer(ID, value)
    };
  }

  /**
   * Get all values
   * @param {String} ID 
   */
  GetAll(ID){
    if(!this.Store[ID]) return null;
    let rtn = {};
    _.map(this.Store[ID], (o, i) => {
      if(o && o.value){
        rtn[i] = o.value;
      }
    });
    return rtn;
  }

  /**
   * Get values of prefix
   * @param {String} ID 
   * @param {String} prefix 
   */
  GetPrefix(ID, prefix){
    let rtn = {};
    _.map(Object.keys(this.Store[ID]), (o, i) => {
      if(o.startsWith(prefix)){
        rtn[o] = this.Store[ID][o];
      }
    });
    return rtn;
  }

  /**
   * Set all values
   * @param {String} ID 
   * @param {*} payload 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  SetAll(ID, payload, override = true, timer = -1){
    _.map(payload, (o, i) => {
      this.Set(ID, i, o, override, timer);
    });
  }

  /**
   * Set all values with prefix
   * @param {String} ID 
   * @param {*} payload 
   * @param {String} prefix 
   * @param {Boolean} without 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  SetPrefix(ID, payload, prefix, without = false, override = true, timer = -1){
    _.map(payload, (o, i) => {
      if(i.startsWith(prefix) != without){
        this.Set(ID, i, o, override, timer);
      }
    });
  }

  /**
   * Remove certain field
   * @param {String} ID 
   * @param {String} field 
   */
  Remove(ID, field){
    if(this.Store[ID]){
      if(_.isArray(field)){
        _.map(field, (o, i) => {
          delete this.Store[ID][o];
        });
      }else{
          delete this.Store[ID][field];
      }
    }
  }

  /**
   * Remove certain field with prefix
   * @param {String} ID 
   * @param {String} prefix 
   */
  RemovePrefix(ID, prefix){
    _.map(Object.keys(this.Store[ID]), (o, i) => {
      if(o.startsWith(prefix)){
        delete this.Store[ID][o];
      }
    });
  }

  /**
   * Remove all except specified
   * @param {String} ID 
   * @param {[string]} except 
   */
  RemoveAll(ID, except = []){
    if(this.Store[ID]){
      let retain = {};
      _.map(except, (o, i) => {
        retain[o] = this.Store[ID][o];
      });

      this.Store[ID] = {
        ...retain
      };
    }
  }

  /**
   * Clear all under ID
   * @param {String} ID 
   */
  Clear(ID){
    if(this.Store[ID]){
      delete this.Store[ID];
    }
  }

  /**
   * List all fields under ID
   * @param {String} ID 
   */
  List(ID){
    if(this.Store[ID]){
      return Object.keys(this.Store[ID]);
    }
    return [];
  }
  
  /**
   * Provide the detail storage
   * @param {String} ID 
   */
  Detail(ID){
    return this.Store[ID];
  }

  /**
   * Decrease the timer by steps and delete when reaches 0
   * @param {String} ID 
   * @param {Number} step 
   */
  Pass(ID, step = 1){
    if(!this.Store[ID]) return;
    _.map(this.Store[ID], (o, i) => {
      if(o.timer > 0){
        o.timer -= step;
      }
      if(o.timer == 0){
        this.Remove(ID, i);
      }
    });
  }
}

module.exports = Storage;