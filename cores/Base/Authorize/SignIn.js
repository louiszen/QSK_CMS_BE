const _base = require('../../../@IZOGears/__ZBase');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const Authorize = require('../../../@IZOGears/User/Authorize');
const {Chalk, Response} = _base.Utils;

module.exports = async (_opt) => {

  const {username, password} = _opt;

  let user = await Authorize.Login(username, password);

  let payload = {};

  if(!user.logged){

    console.error(Chalk.CLog("[-][x]", "signIn :: Failed.", [catName, actName]));
    return Response.Send(false, payload, "Login Failed.");

  }else{

    console.log(Chalk.CLog("[-][o]", "signIn :: Success.", [catName, actName]));

    payload = {
      JWT: user.JWT,
      UserDisplayName: user.UserDisplayName,
      authority: user.authority,
      level: user.level
    };
    
    return Response.Send(true, payload, "Login Succeeded.");
  }

}