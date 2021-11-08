const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response, Time, Fs} = _base.Utils;

module.exports = async (_opt, _param) => {

  let db = await _remote.BaseDB();

  //Get all databases name
  let resQ = await db.GetAllDrawers();

  if(!resQ.Success){
    let msg = resQ.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  let dbs = resQ.payload.sort();

  let backupDir = "./ΩRUNTIME/_backup/" + process.env.NODE_ENV + "/";
  
  let LastBackup = undefined;
  let Backups = [];
  try{
    let res = await Fs.readdir(backupDir);
    console.log(Chalk.CLog("[-]", "Search Backup in " + backupDir + ": " + res.length, [catName, actName]));

    Backups = res;
    if(Backups.length > 0){
      Backups = Backups.reverse();
      let lastbkup = Time.Parse(Backups[0], "YYYYMMDDHHmmss");
      LastBackup = lastbkup.format("DD MMM, YYYY HH:mm:ss");
    }
  }catch(e){}

  let dbSettings = await _remote.GetDatabase();

  let rtn = {
    dbs: dbs,
    LastBackup: LastBackup,
    Backups: Backups,
    include: dbSettings.include
  };

  return Response.Send(true, rtn, "");
  
};