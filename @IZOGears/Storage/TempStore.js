const { Initializable } = require("../../@IZOGears/__ZBase/Extensible");

const Storage = require('../../@IZOGears/__ZBase/Extensible/Storage');

class TempStore extends Initializable {

  static async Init(params){
    this.Store = new Storage();
    return {Success: true};
  }

  static Exists(ID){
    return this.Store.Exists(ID);
  }

  static Get(ID, field){
    return this.Store.Get(ID, field);
  }

  static Set(ID, field, value, override = true, timer = -1){
    this.Store.Set(ID, field, value, override, timer);
  }

  static GetTimer(ID, field){
    return this.Store.GetTimer(ID, field);
  }

  static SetTimer(ID, field, timer = -1){
    this.Store.SetTimer(ID, field, timer);
  }

  static SetValue(ID, field, value){
    this.Store.SetValue(ID, field, value);
  }

  static GetAll(ID){
    return this.Store.GetAll(ID);
  }

  static GetPrefix(ID, prefix){
    return this.Store.GetPrefix(ID, prefix);
  }

  static SetAll(ID, payload, override = true, timer = -1){
    this.Store.SetAll(ID, payload, override, timer);
  }

  static SetPrefix(ID, payload, prefix, without = false, override = true, timer = -1){
    this.Store.SetPrefix(ID, payload, prefix, without = false, override, timer);
  }

  static Remove(ID, field){
    this.Store.Remove(ID, field);
  }

  static RemovePrefix(ID, prefix){
    this.Store.RemovePrefix(ID, prefix);
  }

  static RemoveAll(ID, except = []){
    this.Store.RemoveAll(ID, except);
  }

  static Clear(ID){
    this.Store.Clear(ID);
  }

  static List(ID){
    return this.Store.List(ID);
  }

  static Detail(ID){
    return this.Store.Detail(ID);
  }

  static Pass(ID, step = 1){
    return this.Store.Pass(ID, step);
  }

}

module.exports = TempStore;