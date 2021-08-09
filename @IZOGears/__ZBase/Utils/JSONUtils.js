const Fs = require('./Fs');
const Chalk = require("./Chalk");

class JSONUtils {

  /**
   *  Parse read file to JSON
   * @param {String} filePath 
   */
  static async ParseFile(filePath){
    let str = "";
    try {
      str = await Fs.readFile(filePath, 'utf8');
    } catch (err) {
      console.error(Chalk.Log("[x] JSONUtils :: Cannot Read " + filePath));
      throw new Error("Cannot read " + filePath);
    }

    try {
      let json = JSON.parse(str);
      return json;

    } catch (err) {
      console.error(Chalk.Log("[x] JSONUtils :: Cannot Parse " + filePath));
      throw new Error("Cannot parse " + str.slice(0, 20) +
        "..." + str.slice(-20));
    }
  }
}

module.exports = JSONUtils;