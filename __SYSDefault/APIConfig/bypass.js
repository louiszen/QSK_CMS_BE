const _ = require('lodash');

/**
 * Class governs the autheuthication bypass rules
 */
class ByPass {

  /**
   * Routing Rules that bypasses the authentication
   * @type {[String]}
   */
  static rules = [
    "Base/Authorize/*",
    "Base/Name/*",
    "Minisite/*/*"
  ];

  /**
   * @readonly
   * @param {String} cat 
   * @param {String} subcat 
   * @param {String} func 
   * @returns 
   */
  static Includes(cat, subcat, func){
    for(let i = 0; i<this.rules.length; i++){
      let o = this.rules[i];
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


