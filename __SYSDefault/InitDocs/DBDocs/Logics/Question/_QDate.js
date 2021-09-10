
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "_QDate",
  description: "Ask the date of boarding",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  type: "datetime",
  question: {
    EN: "When will you arrive Hong Kong?",
    TC: "你什麼時候到香港？",
    SC: "你什么时候到香港？",
  }
}

module.exports = doc;