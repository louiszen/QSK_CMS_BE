const _base = require("$/IZOGears/_CoreWheels");

const path = require("path");
const { QFlowX, QSevX } = require("$/modules");
const LUserRecord = require("$/modules/LUserRecords");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response, Time} = _base.Utils;

module.exports = async (_opt, _param, _username) => {

  let {localID, answer} = _opt.data;

  //arrival date
  let arrivalDate = Time.Parse(answer._QDate);

  //analyse severity
  let allLocs = answer._QLoc;
  let sev = await QSevX.Analyze(allLocs, arrivalDate);

  let flow = await QFlowX.GetBySeverity(sev.highestSeverity, arrivalDate);
  let ans = QFlowX.GetAnswer(flow, answer);

  console.log(localID, ans);

  let doc = {
    arrivalDate: arrivalDate,
    userAns: answer,
    highestSeverity: sev.highestSeverity,
    highestLoc: sev.highestLoc,
    relevantPeriod: sev.relevantPeriod,
    template: ans
  };

  await LUserRecord.Write(localID, doc);
  let flag = LUserRecord.CurrentFlag();

  console.log(Chalk.CLog("[-]", "Submit", [catName, actName]));


  return Response.Send(true, {
    id: localID,
    flag: flag
  }, "");

  

};