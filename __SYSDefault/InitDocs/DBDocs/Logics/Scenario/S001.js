const moment = require('moment');

const doc = {
  _id: "S001",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  condition: [
    {
      ref: "Cond1",
      $eq: 1
    },
    {
      ref: "Cond2",
      $eq: true
    },
    {
      ref: "Cond3",
      $eq: false
    },
    {
      ref: "Verdict1",
      $eq: true
    }
  ],
  QUAReq: [
    {
      ref: "1",
      show: true,
      param: [21, 1]
    },
    {
      ref: "2",
      show: true,
      param: [7]
    },
    {
      ref: "3",
      show: true,
      param: [true]
    },
    {
      ref: "4",
      show: true,
      param: [4]
    },
    {
      ref: "5",
      show: false
    },
  ],
  BNEReq: [
    {
      ref: "1",
      show: true
    },
    {
      ref: "2",
      show: true
    },
    {
      ref: "3",
      show: true
    },
    {
      ref: "4",
      show: true
    },
    {
      ref: "5",
      show: false
    },
    {
      ref: "6",
      show: true
    },
    {
      ref: "7",
      show: true
    },
    {
      ref: "8",
      show: true
    }
  ],
  APProc: [
    {
      ref: "1",
      show: true
    },
    {
      ref: "2",
      show: true
    },
    {
      ref: "3",
      show: true
    },
    {
      ref: "4",
      show: true
    },
    {
      ref: "5",
      show: true
    },
    {
      ref: "6",
      show: true
    },
    {
      ref: "7",
      show: true
    },
    {
      ref: "8",
      show: true
    }
  ]
};

module.exports = doc;