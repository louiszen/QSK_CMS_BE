const _base = require('../../../@IZOGears/__ZBase');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const Authorize = require('../../../@IZOGears/User/Authorize');
const {Chalk, Response} = _base.Utils;

module.exports = async (_opt) => {

  const {username} = _opt;

  let res = await Authorize.HasUser(username);

  let payload = {};

  console.log(Chalk.CLog("[-][o]", "signIn :: Success.", [catName, actName]));

  payload = {
    ...res
  };
    
  return Response.Send(true, payload, "Username checked.");

}