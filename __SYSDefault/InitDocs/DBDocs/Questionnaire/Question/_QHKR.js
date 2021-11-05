
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "_QHKR",
  description: "Hong Kong Resident (HKR)",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  question: {
    EN: "Are you a Hong Kong resident?",
    TC: "你是香港居民嗎？",
    SC: "你是香港居民吗？",
  },
  verdict: {
    yes: {
      EN: "A Hong Kong resident",
      TC: "香港居民",
      SC: "香港居民"
    },
    no: {
      EN: "Not a Hong Kong resident",
      TC: "不是香港居民",
      SC: "不是香港居民"
    }
  },
  showInfo: false,
  infoContent: {
    EN: "",
    TC: "",
    SC: ""
  }, 
}

module.exports = doc;