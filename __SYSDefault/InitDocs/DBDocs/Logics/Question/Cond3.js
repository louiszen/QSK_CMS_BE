const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Cond3",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 3,
  type: "question",
  variant: "yesno",
  description: "Stayed at the relevant location for more than 2 hours (For severity 1 location(s) only)",
  conditions: {
    $and: [
      {
        ref: "Cond1",
        $eq: 1
      },
      {
        ref: "Cond2",
        $eq: true
      }
    ]
  },
  question: {
    title: {
      EN: "Have you stayed at @Cond1 for more than 2 hours?",
      TC: "",
      SC: ""
    }
  }
}

module.exports = doc;