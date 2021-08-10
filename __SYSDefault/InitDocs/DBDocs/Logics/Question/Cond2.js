const moment = require('moment');

const doc = {
  _id: "Cond2",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 2,
  type: "question",
  variant: "yesno",
  description: "Hong Kong resident (HKR)",
  conditions: {},
  question: {
    title: {
      EN: "Are you a Hong Kong resident?",
      TC: "",
      SC: "",
    }
  }
}

module.exports = doc;