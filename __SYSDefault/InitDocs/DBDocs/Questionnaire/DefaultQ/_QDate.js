
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "_QDate",
  description: "Ask the date of boarding",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  question: {
    EN: "When will you arrive Hong Kong?",
    TC: "你什麼時候到香港？",
    SC: "你什么时候到香港？",
  },
  verdict: {
    EN: "Going to arrive in Hong Kong on @date",
    TC: "將於 @date 抵達香港",
    SC: "将于 @date 抵达香港"
  },
  showInfo: false,
  infoContent: {
    EN: "",
    TC: "",
    SC: ""
  }, 
}

module.exports = doc;