const Executable = require('../Extensible/Executable');
const Chalk = require('./Chalk');
const Cron = require('cron').CronJob;
const _ = require('lodash');

class CronJob {

  static Init(){
    this.jobs = [];
    this.running = {};
    this.cronjob = [];
  }

  /**
   * 
   * @param {[String]} cronTime 
   * @param {Executable} cronClass 
   */
  static Register(cronTime, cronClass, params, runFirst = true){
    this.jobs.push({
      id: this.jobs.length,
      cronTime: cronTime,
      cronClass: cronClass,
      params: params,
      runFirst: runFirst
    });
  }

  static async Start(){

    console.log(Chalk.Log("[-] CronJob registered: " + this.jobs.length));

    await Promise.all(_.map(this.jobs, async (o, i) => {
      if(o.runFirst){
        await o.cronClass.Exec(o.params);
      }
    }));

    _.map(this.jobs, (o, i) => {
      _.map(o.cronTime, (v, x) => {
        let id = i + "-" + x;
        let job = new Cron(v, 
          async () => {
            if(this.running[id]) {
              console.log(Chalk.Log("[-] CronJob " + id + " is already running. Aborted."));
              return;
            }
            this.running[id] = true;
            try{
              await o.cronClass.Exec(o.params);
              this.running[id] = false;
            }catch(e){
              console.log(Chalk.Log("[-] CronJob " + id + " errors: "));
              console.log(e);
            }finally{
              this.running[id] = false;
            }
          }
        );
        job.start();
        this.cronjob.push({
          id: id,
          job: job
        });
      });
    });

  }
}

module.exports = CronJob;