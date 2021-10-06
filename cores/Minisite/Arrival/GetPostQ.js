const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');
const EffectiveDocsX = require('../../../modules/EffectiveDocsX');
const QFlowX = require('../../../modules/QFlowX');

const {Chalk, Response, Time} = _base.Utils;

module.exports = async (_opt, _param) => {
  
  let {answer} = _opt.data;
  let rtn = {};

  //arrival date
  let arrivalDate = Time.Parse(answer._QDate);

  //get Effective Post Order
  let res = await EffectiveDocsX.GetByRefID("QOrder", "Order", arrivalDate);
  if(!res.Success){
    let msg = res.message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
    return Response.Send(false, "", msg);
  }
  let orderDoc = res.payload.doc;
  let order = orderDoc.post;

  //get analysised Severity
  let _21daysago = Time.Add(arrivalDate, -21, 'days');
  console.log("Arrival Date: " + arrivalDate.format("LLL"))
  console.log("21 Days Ago: " + _21daysago.format("LLL"));

  //sevGroups
  res = await EffectiveDocsX.GetAllUnique("SevGroup", arrivalDate);
  if(!res.Success){
    let msg = res.message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
    return Response.Send(false, "", msg);
  }
  let sevGroups = res.payload;

  //analyse severity
  let allLocs = answer._QLoc;
  let highestLoc = [];
  await Promise.all(_.map(allLocs, async (o, i) => {
    let sevRes = await EffectiveDocsX.GetByRefID("Grouping", o.refID, arrivalDate);
    if(!sevRes.Success){
      let msg = sevRes.message;
      console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      return Response.Send(false, "", msg);
    }
    
    let sevDoc = sevRes.payload.doc;
    let relevantGroupDoc = _.find(sevGroups, o => o.refID === sevDoc.group);
    let severity = relevantGroupDoc.severity;
    let period = relevantGroupDoc.period;
    

    let relevant = true;
    if(o.date){
      relevant = Time.Parse(o.date).isAfter(Time.Add(arrivalDate, -period, 'days'));
    }
    o.severity = severity;
    o.relevant = relevant;

    console.log("RefID: " + o.refID + " Severity: " + severity + " Relevant: " + relevant);
  }));

  let highestSeverity = 99;
  _.map(allLocs, (o, i) => {
    if(o.relevant && o.severity <= highestSeverity){
      highestSeverity = o.severity;
    }
  });

  _.map(allLocs, (o, i) => {
    if(o.relevant && o.severity == highestSeverity){
      o.highest = true;
      highestLoc.push(o.refID);
    }else{
      o.highest = false;
    }
  });

  console.log("Highest Severity: " + highestSeverity)

  //Get Flow
  res = await EffectiveDocsX.GetByRefID("QFlow", "Flow", arrivalDate);
  if(!res.Success){
    let msg = res.message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
    return Response.Send(false, "", msg);
  }

  let flowDoc = res.payload.doc;
  let flow = QFlowX.GetBySeverity(flowDoc.flow, highestSeverity);
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
    highestSeverity: highestSeverity,
    highestLoc: highestLoc
  }

  return Response.Send(true, rtn, "");
}