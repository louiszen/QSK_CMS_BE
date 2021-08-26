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
  DOCReq: {
    DOCReq001: true,
    DOCReq004: true,
    DOCReq005: true,
    DOCReq006: true,
    DOCReq007: true,
  },
  ENTReq: {
    ENTReq001: true,
    ENTReq002: true,
  },
  APProc: {
    APProc001: true,
    APProc002: true,
    APProc003: true,
    APProc004: true,
    APProc005: true,
    APProc006: true,
    APProc007: true,
    APProc008: true,
  }
};

module.exports = doc;