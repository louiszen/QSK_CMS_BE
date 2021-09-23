
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "Q2Hours",
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
  verdict: {
    yes: {
      EN: "Stayed at @loc for more than 2 hours",
      TC: "在@loc 待了多過兩個小時",
      SC: "在@loc 待了多过两个小时"
    },
    no: {
      EN: "Stayed at @loc for less than 2 hours",
      TC: "在@loc 待了少過兩個小時",
      SC: "在@loc 待了少过两个小时"
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