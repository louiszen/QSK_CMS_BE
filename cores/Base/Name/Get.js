const _base = require('../../../@IZOGears/__ZBase');
const _config = require('../../../_config');
const Version = require('../../../Version');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Response} = _base.Utils; 

module.exports = async (_opt) => {

  let rtn = {
    Name: _config.name, 
    Env: process.env.NODE_ENV,
    Version: _config.Version,
    baseVersion: _base.Version,
    backendVersion: Version
  };

  return Response.Send(true, rtn, "");

}