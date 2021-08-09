const _config = require('../../../_config');

const moment = require('moment');

const Fs = require('./Fs');

class Log {

  static GetTime(){
    return moment().format('HH:mm:ss');
  }

  static GetDate(){
    return moment().format('YYYY-MM-DD');
  }

  /**
   *  Write Log to file
   * @param {String} content 
   * @param {String} suffix 
   * @param {String} path 
   */
  static async Write(content, suffix = '', path = _config.Log.Path){
    await Fs.mkdir(path).catch(console.error);
    let filename = './' + path + '/' + this.GetDate() + suffix + '.log';
    let str = this.GetTime() + ' - ' + content + '\n';
    await Fs.appendFile(filename, str); 
  }

  /**
   *  Write Error Log to file
   * @param {String} content 
   * @param {Error} e 
   * @param {String} suffix 
   * @param {String} path 
   * @param {Number} maxShow 
   */
  static async WriteError(content, e, suffix = '-error', path = _config.Log.Path, maxShow = 5000){
    await Fs.mkdir(path).catch(console.error);
    let filename = './' + path + '/' + this.GetDate() + suffix + '.log';
    let eJSONstr = JSON.stringify(e);
    let simE = eJSONstr.slice(0, maxShow);
    let str = this.GetTime() + ' - ' + content + '\n' + simE + (eJSONstr.length > maxShow ? "..." : "") + '\n';
    await Fs.appendFile(filename, str);
  }

}

module.exports = Log;