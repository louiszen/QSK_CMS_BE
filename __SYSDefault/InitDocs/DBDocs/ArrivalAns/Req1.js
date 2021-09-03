const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Req1",
  description: "A1",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  canEntry: true,
  QUAReq: {
    QUAReq001: {
      show: true,
      parameters: [14, "designated places (home, hotel or other accommodation)"]
    },
    QUAReq002: {
      show: false,
    },
    QUAReq003: {
      show: false,
    },
    QUAReq004: {
      show: true,
      parameters: [null, [1, 3, 7, 12, 16, 19], null]
    }
  },
  DOCReq: [
    "DOCReq001",
    "DOCReq004",
    "DOCReq005",
    "DOCReq006",
    "DOCReq007",
  ],
  ENTReq: [
    "ENTReq001",
    "ENTReq002",
  ],
  APProc: [
    "APProc001",
    "APProc002",
    "APProc003",
    "APProc004",
    "APProc005",
    "APProc006",
    "APProc007",
    "APProc008",
  ]
};

module.exports = doc;