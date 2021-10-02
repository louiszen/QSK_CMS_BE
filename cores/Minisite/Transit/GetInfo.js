const _base = require("../../../IZOGears/__ZBase");
const _remote = require("../../../remoteConfig");

const path = require("path");
const GetEffectiveDoc = require("../../../modules/GetEffectiveDoc");
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require("lodash");

const { Chalk, Response, Time } = _base.Utils;

module.exports = async (_opt, _param) => {
  let rtn = {};
  let now = Time.Now();

  //get valid transit master doc
  let res = await GetEffectiveDoc("TransitAnsTemp", "TraAns", now);
  if (!res.Success) {
    let msg = res.message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
  }

  let trAnsTemp = res.payload.doc;

  //foreach id in the temp doc, find the corresponding full answer
  let trAnsCompAll = await Promise.all(
    _.map(trAnsTemp.Components, async (o) => {
      let { refID } = o;
      res = await GetEffectiveDoc("TransitAnsComp", refID, now);
      if (!res.Success) {
        let msg = res.message;
        console.log(Chalk.CLog("[!]", msg, [catName, actName]));
      }
      let trAnsComp = res.payload.doc;

      let { displayLastUpdate, display } = trAnsComp;
      return {
        displayLastUpdate,
        display,
      };
    })
  );

  console.log(Chalk.CLog("[-]", "<MESSAGE>", [catName, actName]));

  return Response.Send(true, trAnsCompAll, "");
};
