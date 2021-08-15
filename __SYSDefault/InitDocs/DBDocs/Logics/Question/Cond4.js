const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Cond4",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 5,
  type: "question",
  variant: "yesno",
  description: "Via Return2HK Scheme (For HKR who have not been to places outside Mainland Chaina and Macao only)",
  conditions: {
    $or: [
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 99
          },
          {
            ref: "Cond2",
            $eq: true
          },
          {
            ref: "Verdict1",
            $eq: true
          }
        ]
      }
    ]
  },
  question: {
    title: {
      EN: "Are you entering Hong Kong under the \"Return2HK\" Scheme?",
      TC: "",
      SC: ""
    }
  },
  possibleAns: [true, false]
}

module.exports = doc;