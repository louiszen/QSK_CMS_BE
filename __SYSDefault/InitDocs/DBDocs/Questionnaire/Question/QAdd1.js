
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "QAdd1",
  description: "Stayed at the relevant location for more than 2 hours (For severity 1 location(s) only)",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  type: "yesno",
  question: {
    EN: "Have you stayed at @loc for more than 2 hours?",
    TC: "你在 @loc 待多過2個多小時嗎？",
    SC: "你在 @loc 待多过2个多小时吗？",
  },
  showInfo: false,
  infoPage: "", 
}

module.exports = doc;