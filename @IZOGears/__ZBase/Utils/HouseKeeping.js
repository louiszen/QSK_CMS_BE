const moment = require('moment');

const Fs = require('./Fs');
const Time = require('./Time');
const Chalk = require('./Chalk');

class HouseKeeping {

  /**
   * Delete all files that exceeds the specified time limit
   * @param {String} pathToDir 
   * @param {Number} time 
   * @param {String} unit 
   */
  static async Clean(pathToDir, time, unit){
    try{
      let count = 0;
      let fileNames = await Fs.readdir(pathToDir);

      console.log(Chalk.Log('[-] Scanned ' + fileNames.length + ' files in ' + pathToDir));
      await Promise.all(_.map(fileNames, async (o, i) => {
        let file = pathToDir + "/" + o;
        let stat = await Fs.stat(file);
        if(Time.Difference(moment(stat.mtime), moment(),unit) > time){
          count++;
          await Fs.unlink(file);
        }
      }));

      console.log(Chalk.Log('[-] Removed ' + count + " files from "  + pathToDir));

      return {Success: true, payload: null};
    }catch(e){
      console.log(Chalk.Log('[!] Folder is not found.'));
      return {Success: false, payload: e};
    }
  }
}

module.exports = HouseKeeping;