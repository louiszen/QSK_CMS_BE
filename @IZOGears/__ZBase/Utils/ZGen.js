class ZGen {

  /**
   * 
   * @param {String} start 
   * @param {String} end 
   */
  static Alphabet(start = 'A', end = 'Z'){
    let rtn = [];
    let startC = start.charCodeAt(0);
    let lastC  = end.charCodeAt(0);
    for (let i = startC; i <= lastC; ++i) {
      rtn.push(String.fromCharCode(i));
    }

    return rtn;
  }
}

module.exports = ZGen;