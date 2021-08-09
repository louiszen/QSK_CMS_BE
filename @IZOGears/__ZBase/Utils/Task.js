
class Task{
  
  /**
   *  Wait for next operation
   * @param {Number | String} interval 
   */
  static Wait(interval){
    return new Promise(res => {
      setTimeout(res, parseInt(interval));
    });
  }

  /**
   *  Call and wait
   * @param {Promise} method 
   * @param {Number | String} interval 
   */
  static async CallAndWait(method, interval){
    const [result] = await Promise.all([
      method(),
      this.Wait(interval)
    ])
    return result;
  }

  /**
   *  Call or wait for method to run
   * @param {Promise} method 
   * @param {Number | String} interval 
   */
  static async CallOrWait(method, interval){
    const result = await Promise.race([
      method(),
      this.Wait(interval).then(()=>{
        throw new Error("Timeout after " + (interval/10000) + "s");
      })
    ])
    return result;
  }

  /**
   *  Retry Promise for n times at specified interval
   * @param {Promise} method 
   * @param {Number} times 
   * @param {Number} interval 
   */
  static async Retry(method, times = 5, interval = 1000){
    try {
      const result = await method();
      return result;
    } catch (e) {
      if (times > 1) {
        await this.Wait(interval);
        return this.Retry(method, times - 1, interval);
      }
      throw e;
    }
  }
}

module.exports = Task;