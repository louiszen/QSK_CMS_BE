
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "_QHKR",
  description: "Hong Kong Resident (HKR)",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  type: "yesno",
  order: 2,
  question: {
    EN: "Are you a Hong Kong resident?",
    TC: "你是香港居民嗎？",
    SC: "你是香港居民吗？",
  }
}

module.exports = doc;