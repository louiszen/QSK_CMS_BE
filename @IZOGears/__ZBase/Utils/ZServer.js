const http = require('http');
const https = require('https');
const nomalizePort = require('normalize-port');

const ZBaseVersion = require('../Version');
const Fs = require('./Fs');
const Chalk = require('./Chalk');
const Time = require('./Time');

class ZServer {

  /**
   * serverConfig: {
   *  port: 5034,
   *  domain: "https://robot.mobinology.com:3300",
   *  useHttps: true, 
   *  https: {
   *    key: "../../151.key",
   *    cert: "../../151.crt",
   *    intermediate: "../../intermediate.crt",
   *    passphrase: "P@ssw0rd"
   *  }
   * }
   * 
   * @param {{
   *  port: Number,
   *  domain: String,
   *  useHttps: Boolean,
   *  https: {
   *    key: String,
   *    cert: String,
   *    intermediate: String,
   *    passphrase: String
   *  }
   * }} serverConfig 
   * @param {*} app 
   * @param {Boolean} showConsole
   */
  static async Start(serverConfig, app, showConsole = true){
    let server;
    let useHttps = serverConfig.useHttps;
    const port = nomalizePort(process.env.SERVER_PORT || serverConfig.port);

    if(useHttps){
      try{
        let credentials = {
          key: await Fs.readFile(serverConfig.https.key),
          cert: await Fs.readFile(serverConfig.https.cert),
          ca: await Fs.readFile(serverConfig.https.intermediate),
          passphrase: serverConfig.https.passphrase
        };
        server = https.createServer(credentials, app);
      }catch(e){
        useHttps = false;
        server = http.createServer(app);
      }
    }else{
      server = http.createServer(app);
    }

    const Messages = [
      "[-] PROJECT: " + Chalk.Color(process.env.NODE_PROJECT.toUpperCase(), "BrightWhite"),
      "[-] ENV: " + process.env.NODE_ENV.toUpperCase(),
      "[-] ZBase Version: " + ZBaseVersion,
      "[-] NodeJS Version: " + process.version,
      "[-] Running Port " + port,
      "[-] Https: " + (useHttps ? "YES" : "NO"),
      "[-] Start Time: " + Time.Now().toLocaleString()
    ];
    
    server.listen(port, '0.0.0.0', () => {
      Messages.forEach(e => console.log(Chalk.Log(e, [], false)));
      Chalk.Break();
      if(!showConsole){
        console.log(Chalk.Log("[!] Console Log Disabled."));
        console.log = () => {};
        Chalk.Log = (msg) => msg;
      } 
    });
  }
}

module.exports = ZServer;