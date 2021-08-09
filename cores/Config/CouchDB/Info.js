const _base = require('../../../@IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();

  let configDBName = await _remote.GetDBName("Config");

  let resDBNAME = await db.getDocQ(configDBName, "DBNAME");
  let docDBNAME = resDBNAME.payload;
  delete docDBNAME._id;
  delete docDBNAME._rev;

  let docDBConfig = await _remote.GetCouchDB();

  let rtnDBName = [];
  _.map(docDBNAME, (o, i) => {
    rtnDBName.push({
      id: i,
      alias: o,
      included: docDBConfig.include.includes(o)
    });
  });

  let rtnEnv = {
    BASE: "",
    USERNAME: "",
    PASSWORD: "",
    URL: ""
  };

  if(docDBConfig.envs[process.env.NODE_ENV]){
    let {BASE, USERNAME, PASSWORD, URL} = docDBConfig.envs[process.env.NODE_ENV];
    rtnEnv = {
      BASE,
      USERNAME,
      PASSWORD,
      URL
    };
  }

  let payload = {
    DBNAME: rtnDBName,
    ENV: rtnEnv
  };

  console.log(Chalk.CLog("[>]", "CouchDB Config Sent", [catName, actName]));

  return Response.Send(true, payload, "");

}