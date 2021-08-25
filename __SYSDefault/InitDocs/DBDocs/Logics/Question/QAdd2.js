
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "QAdd2",
  description: "Via Return2HK Scheme (For HKR who have not been to places outside Mainland Chaina and Macao only)",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  type: "yesno",
  order: 5,
  question: {
    EN: "Are you entering Hong Kong under the \"Return2HK\" Scheme?",
    TC: "您是通過“Return2HK”計劃進入香港嗎？",
    SC: "您是通过“Return2HK”计划进入香港吗？",
  }
}

module.exports = doc;