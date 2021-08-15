const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Cond6",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 7,
  type: "question",
  variant: "yesno",
  description: "Possesses positive antibody test result (For fully vaccinated pax only)",
  conditions: {
    $or: [
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 3
          },
          {
            ref: "Verdict1",
            $eq: true
          },
          {
            ref: "Cond5",
            $eq: true
          }
        ]
      },
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 4
          },
          {
            ref: "Verdict1",
            $eq: true
          },
          {
            ref: "Cond5",
            $eq: true
          }
        ]
      }
    ]
  },
  question: {
    title: {
      EN: "Do you possess positive antibody test result?",
      TC: "",
      SC: ""
    }
  },
  possibleAns: [true, false]
}

module.exports = doc;