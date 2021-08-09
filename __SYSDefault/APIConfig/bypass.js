const _ = require('lodash');

class ByPass {

  static bypass = [
    "Base/Authorize/*",
    "Base/Name/*"
  ];

  static Includes(cat, subcat, func){
    for(let i = 0; i<this.bypass.length; i++){
      let o = this.bypass[i];
      let splited = o.split('/');
      let acat = splited[0];
      let asubcat = splited[1];
      let afunc = splited[2];

      if(acat !== "*" && acat !== cat) continue;
      if(asubcat !== "*" && asubcat !== subcat) continue;
      if(afunc !== "*" && afunc !== func) continue;
      return true;
    }

    return false;
  }

}

module.exports = ByPass;


