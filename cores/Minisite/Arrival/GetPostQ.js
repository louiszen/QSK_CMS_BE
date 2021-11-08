const _base = require("$/IZOGears/_CoreWheels");

const path = require("path");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const EffectiveDocsX = require("$/modules/EffectiveDocsX");
const QFlowX = require("$/modules/QFlowX");
const { QSevX, QOrderX } = require("$/modules");

const {Chalk, Response, Time} = _base.Utils;

module.exports = async (_opt, _param) => {
  
  let {answer} = _opt.data;
  let res;
  let rtn = {};

  //arrival date
  let arrivalDate = Time.Parse(answer._QDate);

  //get Effective Post Order
  let order = await QOrderX.GetPost(arrivalDate);

  //get analysised Severity
  let _21daysago = Time.Add(arrivalDate, -21, "days");
  console.log("Arrival Date: " + arrivalDate.format("LLL"));
  console.log("21 Days Ago: " + _21daysago.format("LLL"));

  //analyse severity
  let allLocs = answer._QLoc;
  let sev = await QSevX.Analyze(allLocs, arrivalDate);

  let flow = await QFlowX.GetBySeverity(sev.highestSeverity, arrivalDate);
  let postQ = QFlowX.AllQuestions(flow);

  //Get Qs
  let rtnQs = [];
  for(let i=0; i<order.length; i++){
    
    let o = order[i];
    if(!postQ.includes(o)) continue;
    res = await EffectiveDocsX.GetByRefID("Question", o, arrivalDate);

    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      throw Error(msg);
    }

    let QDoc = res.payload.doc;
    delete QDoc._id;
    delete QDoc._rev;
    delete QDoc.version;
    delete QDoc.effective;
    delete QDoc.lastUpdate;
    delete QDoc.verdict;
    rtnQs.push(QDoc);

  }

  console.log(Chalk.CLog("[-]", "GetPostQ", [catName, actName]));

  rtn = {
    flow: flow,
    questions: rtnQs,
    qorder: order,
    highestSeverity: sev.highestSeverity,
    highestLoc: sev.highestLoc
  };

  return Response.Send(true, rtn, "");
};