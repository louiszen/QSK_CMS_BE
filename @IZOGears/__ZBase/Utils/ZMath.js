class ZMath {

  /**
   * Check if the data is between a range
   * @param {Number} value 
   * @param {Number} a 
   * @param {Number} b 
   * @param {"[)" | "[]" | "(]" | "()"} inclusivity 
   */
  static IsBetween(value, a, b, inclusivity = "[)"){
    switch(inclusivity){
      case "[)": return value >= a && value < b;
      case "[]": return value >= a && value <= b;
      case "(]": return value > a && value <= b;
      case "()": default:
        return value > a && value < b;
    }
  }

  /**
   * Random Integer
   * @param {Number} max 
   */
  static RandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
}

module.exports = ZMath;