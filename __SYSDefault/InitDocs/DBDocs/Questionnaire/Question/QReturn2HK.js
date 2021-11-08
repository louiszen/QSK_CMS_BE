
const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "QReturn2HK",
  description: "Via Return2HK Scheme (For HKR who have not been to places outside Mainland Chaina and Macao only)",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  question: {
    EN: "Are you entering Hong Kong under the \"Return2HK\" Scheme?",
    TC: "您是通過“Return2HK”計劃進入香港嗎？",
    SC: "您是通过“Return2HK”计划进入香港吗？",
  },
  verdict: {
    yes: {
      EN: "Arriving Hong Kong under the \"Return2HK\" Scheme",
      TC: "根據“Return2HK”計劃抵達香港",
      SC: "根据“Return2HK”计划抵达香港"
    },
    no: {
      EN: "Not arriving Hong Kong under the \"Return2HK\" Scheme",
      TC: "不是根據“Return2HK”計劃抵達香港",
      SC: "不是根据“Return2HK”计划抵达香港"
    }
  },
  showInfo: false,
  infoContent: {
    EN: "",
    TC: "",
    SC: ""
  }, 
};

module.exports = doc;