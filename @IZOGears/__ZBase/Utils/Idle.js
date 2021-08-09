const { promisify } = require('util');
const sleep = promisify(setTimeout);

class Idle{

  /**
   * Idle for n milliseconds
   * @param {Number} ms 
   */
  static async Sleep(ms){
    await sleep(ms);
  }
}

module.exports = Idle;