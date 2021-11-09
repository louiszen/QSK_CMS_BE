/**
 * Class governs the autheuthication bypass rules
 */
class ByPass {

  /**
   * Routing Rules that bypasses the authentication
   * @type {[String]}
   */
  static RULES = [
    "CommonAPI/Auth/*",
    "CommonAPI/Env/Info",
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
    for(let i = 0; i<this.RULES.length; i++){
      let o = this.RULES[i];
      let splited = o.split("/");
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


