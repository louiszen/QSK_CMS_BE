const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "S003",
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
      ref: "QUAReq001",
      $eq: true,
      param: 21
    },
    {
      ref: "QUAReq002",
      $eq: true,
      param: 7
    },
    {
      ref: "QUAReq003",
      $eq: true,
      param: true
    },
    {
      ref: "QUAReq004",
      $eq: true,
      param: 4
    },
    {
      ref: "QUAReq005",
      $eq: false
    },
    {
      ref: "QUAReq006",
      $eq: false
    },
    {
      ref: "QUAReq007",
      $eq: false
    },
  ],
  BNEReq: [
    {
      ref: "BNEReq001",
      $eq: true
    },
    {
      ref: "BNEReq002",
      $eq: true
    },
    {
      ref: "BNEReq003",
      $eq: true
    },
    {
      ref: "BNEReq004",
      $eq: true
    },
    {
      ref: "BNEReq005",
      $eq: false
    },
    {
      ref: "BNEReq006",
      $eq: true
    },
    {
      ref: "BNEReq007",
      $eq: true
    },
    {
      ref: "BNEReq008",
      $eq: true
    }
  ],
  APProc: [
    {
      ref: "APProc001",
      $eq: true
    },
    {
      ref: "APProc002",
      $eq: true
    },
    {
      ref: "APProc003",
      $eq: true
    },
    {
      ref: "APProc004",
      $eq: true
    },
    {
      ref: "APProc005",
      $eq: true
    },
    {
      ref: "APProc006",
      $eq: true
    },
    {
      ref: "APProc007",
      $eq: true
    },
    {
      ref: "APProc008",
      $eq: true
    }
  ]
};

module.exports = doc;