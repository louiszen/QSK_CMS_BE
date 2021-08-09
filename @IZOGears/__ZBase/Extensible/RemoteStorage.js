const ExpirableDB = require('./ExpirableDB');

const _ = require('lodash');

/**
 * Extension for ExpirableDB with ID-field data structure
 */
class RemoteStorage extends ExpirableDB{

  /**
   * 
   * @param {String} ID 
   * @returns 
   */
  static async Exists(ID){
    let doc = await this.Doc(ID);
    if(doc){
      return true;
    }
    return false;
  }

  /**
   * Get the field value of remote doc
   * @param {String} ID 
   * @param {String} field
   */
  static async Get(ID, field){
    let doc = await this.Doc(ID);
    return this.GetField(doc, field);
  }

  /**
   * Get the field value in given doc
   * @note Internal use only
   * @param {*} doc 
   * @param {String} field 
   * @returns {*} modified doc
   */
  static GetField(doc, field){
    if(doc){
      if(!doc.Data) return null;
      if(_.isUndefined(doc.Data[field])){
        return null;
      }
      return doc.Data[field].value;
    } 
    return null;
  }

  /**
   * @note Internal use only
   * @param {*} doc 
   * @param {String} field 
   * @param {*} value 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  static SetField(doc, field, value, override = true, timer = -1){
    if(override 
      || (this.GetField(doc, field) == null 
        || !_.isEqual(this.GetField(doc, field), value)))
        {
          doc.Data = doc.Data || {};
          doc.Data[field] = {
            value: value,
            timer: timer
          }
        }
    return doc;
  }

  /**
   * Set the field value of the remote doc
   * @param {String} ID 
   * @param {String} field 
   * @param {*} value 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  static async Set(ID, field, value, override = true, timer = -1){
    let doc = await this.Doc(ID);
    if(!doc) {
      doc = {
        _id: ID,
        Data: {}
      };
    }
    doc = this.SetField(doc, field, value, override, timer);
    return await this.Insert(doc);
  }

  /**
   * Push the value to the field as array items
   * @param {String} ID 
   * @param {String} field 
   * @param {*} value 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  static async Push(ID, field, value, override = true, timer = -1){
    let current = await this.Get(ID, field);
    if(!_.isArray(current)){
      current = [];
    }
    current.push(value);
    return await this.Set(ID, field, current, override, timer);
  }

  /**
   * Set multiple fields of the remote doc
   * @param {String} ID 
   * @param {[{
   *  field: String, 
   *  value: *, 
   *  override?: Boolean,
   *  timer?: Number
   * }]} data 
   */
  static async SetBulk(ID, data){
    let doc = await this.Doc(ID);
    if(!doc) {
      doc = {
        _id: ID,
        Data: {}
      };
    }
    _.map(data, (o, i) => {
      doc = this.SetField(doc, o.field, o.value, o.override !== false, o.timer || -1);
    });
    return await this.Insert(doc);
  }

  /**
   * Get the time counting of the field
   * @note Internal use only
   * @param {*} doc 
   * @param {String} field 
   * @returns {Number?}
   */
  static GetTimer(doc, field){
    if(doc){
      if(!doc.Data) return null;
      if(_.isUndefined(doc.Data[field])){
        return null;
      }
      return doc.Data[field].timer;
    } 
    return null;
  }

  /**
   * Set the time counting of the field
   * @note Internal use only
   * @param {String} ID 
   * @param {String} field 
   * @param {Number} timer 
   */
  static async SetTimer(ID, field, timer = -1){
    let doc = await this.Doc(ID);
    doc.Data = doc.Data || {};
    doc.Data[field] = {
      value: this.GetField(doc, field),
      timer: timer
    }
    await this.Insert(doc);
  }

  /**
   * Set only the value of the field
   * @note internal use only
   * @param {String} ID 
   * @param {String} field 
   * @param {*} value 
   */
  static async SetValue(ID, field, value){
    let doc = await this.Doc(ID);
    doc.Data = doc.Data || {};
    doc.Data[field] = {
      value: value,
      timer: this.GetTimer(doc, field)
    }
    await this.Insert(doc);
  }

  /**
   * Get all the fields
   * @param {String} ID 
   * @returns {*}
   */
  static async GetAll(ID){
    let doc = await this.Doc(ID);
    if(!doc) doc = {};
    doc.Data = doc.Data || {};
    let rtn = {};
    _.map(doc.Data, (o, i) => {
      if(o && o.value){
        rtn[i] = o.value;
      }
    });
    return rtn;
  }

  /**
   * Get all the fields with specified prefix
   * @param {String} ID 
   * @param {String} prefix 
   */
  static async GetPrefix(ID, prefix){
    let doc = await this.Doc(ID);
    doc.Data = doc.Data || {};
    let rtn = {};
    _.map(Object.keys(doc.Data), (o, i) => {
      if(o.startsWith(prefix)){
        rtn[o] = doc.Data[o];
      }
    });
    return rtn;
  }

  /**
   * Set all the fields
   * @param {String} ID 
   * @param {*} payload 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  static async SetAll(ID, payload, override = true, timer = -1){
    let doc = await this.Doc(ID);
    _.map(payload, async (o, i) => {
      doc = this.SetField(doc, i, o, override, timer);
    });
    return await this.Insert(doc);
  }

  /**
   * Set all the field with or without specified prefix
   * @param {String} ID 
   * @param {*} payload 
   * @param {String} prefix 
   * @param {Boolean} without 
   * @param {Boolean} override 
   * @param {Number} timer 
   */
  static async SetPrefix(ID, payload, prefix, without = false, override = true, timer = -1){
    let doc = await this.Doc(ID);
    _.map(payload, async (o, i) => {
      if(i.startsWith(prefix) != without){
        doc = this.SetField(doc, i, o, override, timer);
      }
    });
    return await this.Insert(doc);
  }

  /**
   * Remove certain field
   * @param {String} ID 
   * @param {String} field 
   */
  static async Remove(ID, field){
    let doc = await this.Doc(ID);
    doc.Data = doc.Data || {};
    if(doc){
      if(!_.isArray(field)){
        field = [field]
      }
      _.map(field, (o, i) => {
        if(doc.Data[o])
        {
          delete doc.Data[o]
        }
      });
    }
    return await this.Insert(doc);
  }

  /**
   * Remove fields with prefix
   * @param {String} ID 
   * @param {String} prefix 
   */
  static async RemovePrefix(ID, prefix){
    let doc = await this.Doc(ID);
    doc.Data = doc.Data || {};

    _.map(Object.keys(doc.Data), (o, i) => {
      if(o.startsWith(prefix)){
        delete doc.Data[o];
      }
    });
    return await this.Insert(doc);
  }

  /**
   * Remove all except specified field
   * @param {String} ID 
   * @param {[String]} except 
   */
  static async RemoveAll(ID, except = []){
    let doc = await this.Doc(ID);
    if(doc){
      doc.Data = doc.Data || {};
      let retain = {};
      _.map(except, (o, i) => {
        retain[o] = doc.Data[o];
      });

      doc.Data = {
        ...retain
      }

      return await this.Insert(doc);
    }
    return {Success: true};
  }

  /**
   * Clear the ID
   * @param {String} ID 
   */
  static async Clear(ID){
    let doc = await this.Doc(ID);
    doc.Data = {};
    return await this.Insert(doc);
  }

  /**
   * List the fields under ID
   * @param {String} ID 
   */
  static async List(ID){
    let doc = await this.Doc(ID);
    if(doc){
      doc.Data = doc.Data || {};
      return Object.keys(doc.Data);
    }
    return [];
  }

  /**
   * Return the data under ID
   * @param {String} ID 
   */
  static async Detail(ID){
    let doc = await this.Doc(ID);
    doc.Data = doc.Data || {};
    return doc.Data;
  }

  /**
   * Decrease the timer by steps and delete when reaches 0
   * @param {String} ID 
   * @param {Number} step 
   */
  static async Pass(ID, step = 1){
    let doc = await this.Doc(ID);
    if(!doc) return {Success: true};
    doc.Data = doc.Data || {};
    _.map(doc.Data, (o, i) => {
      if(o.timer > 0){
        o.timer -= step;
      }
      if(o.timer == 0){
        delete doc.Data[i];
      }
    });
    return await this.Insert(doc);
  }

}

module.exports = RemoteStorage;