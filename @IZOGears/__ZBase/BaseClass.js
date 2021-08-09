const Chalk = require("./Utils/Chalk");
const Path = require("./Utils/Path");

/**
 * BaseClass with Decorated Console Log
 */

class BaseClass {
  
  /**
   * return "{Instance Name}"
   * @param {String} dir
   * The directory of this child class script located
   */
  Name(dir = "") {
    return "{" + (dir.trim() ? Path.Base(dir) + "/" : "") + this.constructor.name + "}";
  }

  /**
   *
   * Message Decorated by Chalk and Log Standard
   *
   * @param {String} message
   * Message to shown
   * @param {String} prefix
   * Console prefix icon
   * @param {String} suffix
   * Patterns shown after instance name
   * @param {String} dir
   * The directory of this child class script located
   *
   */
  CLog(message, prefix = "[-]", suffix = "::", dir = "") {
    return Chalk.Log(prefix + " " + this.Name(dir) + " " + suffix + " " + message);
  }

  /**
   * return "{Instance Name}"
   * @param {String} dir
   * The directory of this child class script located
   */
  static Name(dir = "") {
    let classname = this.toString()
      .split("(" || /s+/)[0]
      .split(" " || /s+/)[1];
    return "[" + (dir.trim() ? Path.Base(dir) + "/" : "") + classname + "]";
  }

  /**
   *
   * Message Decorated by Chalk and Log Standard
   *
   * @param {String} message
   * Message to shown
   * @param {String} prefix
   * Console prefix icon
   * @param {String} suffix
   * Patterns shown after instance name
   * @param {String} dir
   * The directory of this child class script located
   */
  static CLog(message, prefix = "[-]", suffix = "::", dir = "") {
    return Chalk.Log(prefix + " " + this.Name(dir) + " " + suffix + " " + message);
  }
}

module.exports = BaseClass;
