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
  QUAReq: [
    {
      ref: "QUAReq001",
      parameters: [21, 0]
    },
    {
      ref: "QUAReq002",
      parameters: [7]
    },
    {
      ref: "QUAReq003"
    },
    {
      ref: "QUAReq004",
      parameters: [6, [], [26]]
    }
  ],
  DOCReq: [
    {
      ref: "DOCReq001"
    },
    {
      ref: "DOCReq004"
    },
    {
      ref: "DOCReq005"
    },
    {
      ref: "DOCReq006"
    },
    {
      ref: "DOCReq007"
    }
  ],
  ENTReq: [
    {
      ref: "ENTReq001"
    },
    {
      ref: "ENTReq002"
    }
  ],
  APProc: [
    {
      ref: "APProc001"
    },
    {
      ref: "APProc002"
    },
    {
      ref: "APProc003"
    },
    {
      ref: "APProc004"
    },
    {
      ref: "APProc005"
    },
    {
      ref: "APProc006"
    },
    {
      ref: "APProc007"
    },
    {
      ref: "APProc008"
    }
  ]

};

module.exports = doc;