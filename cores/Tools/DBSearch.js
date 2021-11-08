const _base = require("../../IZOGears/_CoreWheels");
const _remote = require("../../remoteConfig");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require("lodash");

const {Chalk, Response} = _base.Utils;

module.exports = async (_opt) => {

  let db = await _remote.BaseDB();

  let {data} = _opt;

  if(_.isEmpty(data.skip)){
    data.skip = 0;
  }

  if(_.isEmpty(data.limit)){
    data.limit = 1000;
  }

  if(!_.isEmpty(data.selector) && data.limit){
    data.limit = data.limit + 1;
  }  

  console.log(Chalk.CLog("[-]", data.skip + "~" + data.limit, [catName, actName]),
    data.fields, data.sort, data.selector
  );

  let rtn = await db.Find(data.dbname, 
    data.selector,
    data.skip, data.limit, 
    data.fields, data.sort
  );

  if(rtn.Success){
    return Response.Send(true, rtn.payload, "");
  }else{
    return Response.SendError(9001, rtn.payload);
  }

};