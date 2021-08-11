const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(), 
  refID: "Cond5",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 6,
  type: "question",
  variant: "yesno",
  description: "Fully vaccinated",
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
          }
        ]
      },
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 5
          },
          {
            ref: "Verdict1",
            $eq: true
          }
        ]
      },
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 99
          },
          {
            ref: "Verdict1",
            $eq: true
          },
          {
            ref: "Cond4",
            $eq: false
          }
        ]
      }
    ]
  },
  question: {
    title: {
      EN: "Have you fully vaccinated?",
      TC: "",
      SC: ""
    }
  }
}

module.exports = doc;