class Text {

  /**
   *  Convert Full Character to Half Character
   * @param {String} text 
   */
  static Full2Half(text){
    let rtn = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) == 12288) {
        rtn += String.fromCharCode(text.charCodeAt(i) - 12288);
        continue;
      }
    
      if (text.charCodeAt(i) > 65280 && text.charCodeAt(i) < 65375) {
        rtn += String.fromCharCode(text.charCodeAt(i) - 65248);
        continue;
      }
    
      rtn += text.charAt(i);
    }
    return rtn;
  }

  /**
   * Pad characters for the input string to specified length
   * @param {String} str 
   * @param {String} char 
   * @param {Number} length 
   */
  static Pad(str, char, length) {
    if (typeof str == 'undefined' 
      || typeof char != 'string' 
      || char.length != 1
      || isNaN(length)) 
        return str;
    str = str.toString();
    if (str.length >= length) 
      return str;
    return this.Pad(char + str, char, length);
  }

}

module.exports = Text;