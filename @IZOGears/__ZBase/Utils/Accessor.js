const _ = require('lodash');

class Accessor {
  /**
   * Get content by "xxx.xxx.xxx" instead of o[xxx][xxx][xxx]
   * @param {*} obj 
   * @param {String} accessor 
   */
  static Get(obj, accessor, nullValue = ""){
    if(!accessor || !obj) 
      return nullValue;
    
    let fields = accessor.split('.');
    let rtn = obj;

    for(let i=0; i<fields.length; i++){
      if(rtn === null || rtn === undefined) return nullValue;
      rtn = rtn[fields[i]];
    }

    return rtn;
  }

  /**
   * Set content by "xxx.xxx.xxx" instead of o[xxx][xxx][xxx]
   * @param {*} obj 
   * @param {String} accessor 
   * @param {*} value 
   */
  static Set(obj, accessor, value){
    if (typeof accessor === 'string'){
      return this.Set(obj, accessor.split('.'), value);
    }else if (accessor.length === 1){
      if(value === undefined){
        if(obj[accessor[0]]){
          delete obj[accessor[0]];
        }
      }else{
        obj[accessor[0]] = value;
        return obj;
      }
    }else if (accessor.length === 0){
      return obj;
    }else{
      if(!obj[accessor[0]]) {
        if(accessor.length > 1 && accessor[1] === "0"){
          obj[accessor[0]] = [];
        }else{
          obj[accessor[0]] = {};
        }
      }
      return this.Set(obj[accessor[0]], accessor.slice(1), value);
    }
  }

  /**
 * Delete the field
 * @param {*} obj 
 * @param {String} accessor 
 */
   static Delete(obj, accessor){
    this.Set(obj, accessor, undefined);
  }

  /**
   * 
   * @param {*} obj1 
   * @param {*} obj2 
   * @param {[String]} fields
   */
  static IsIdentical(obj1, obj2, fields = null){
    if(fields && fields.length){
      for(var i=0; i<fields.length; i++){
        let v1 = this.Get(obj1, fields[i]);
        let v2 = this.Get(obj2, fields[i]);
        if(!_.isEqual(v1, v2) && !(_.isEmpty(v1) && _.isEmpty(v2))){
          return false;
        } 
      }
      return true;
    }

    return _.isEqual(obj1, obj2);
  }

  /**
   * 
   * @param {*} obj 
   * @param {[String]} exclude 
   * @returns 
   */
  static Exclude(obj, exclude){
    let filtered = Object.keys(obj)
      .filter(o => !exclude.includes(o))
      .reduce((o, i) => {
        let value = Accessor.Get(obj, i);
        Accessor.Set(o, i, value);
        return o;
      }, {});

    return filtered;
  }

  /**
   * 
   * @param {*} obj 
   * @param {[String]} include 
   * @returns 
   */
   static Remain(obj, include){
    let filtered = Object.keys(obj)
      .filter(o => include.includes(o))
      .reduce((o, i) => {
        let value = Accessor.Get(obj, i);
        Accessor.Set(o, i, value);
        return o;
      }, {});

    return filtered;
  }

  /**
   * 
   * @param {*} obj 
   * @returns 
   */
  static isDeepEmpty(obj){
    if(_.isObject(obj)) {
      if(Object.keys(obj).length === 0) return true;
      return _.every(_.map(obj, v => this.isDeepEmpty(v)))
    } else if(_.isString(obj)) {
      return !obj.length;
    }
    return false;
  }
}

module.exports = Accessor;