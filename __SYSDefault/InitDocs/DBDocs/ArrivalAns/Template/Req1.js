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
      refID: "QUAReq001",
      parameters: ["14 days", "home, hotel or other accommodation"]
    },
    {
      refID: "QUAReq006",
      parameters: ["3rd, 7th, 12th, 16th, 19th day"]
    }
  ],
  DOCReq: [
    {
      refID: "DOCReq001",
    },
    {
      refID: "DOCReq004",
    },
    {
      refID: "DOCReq005",
    },
    {
      refID: "DOCReq006",
    },
    {
      refID: "DOCReq007",
    },
  ],
  ENTReq: [
    {
      refID: "ENTReq001",
    },
    {
      refID: "ENTReq002",
    },
  ],
  APProc: [
    {
      refID: "APProc001",
    },
    {
      refID: "APProc002",
    },
    {
      refID: "APProc003",
    },
    {
      refID: "APProc004",
    },
    {
      refID: "APProc005",
    },
    {
      refID: "APProc006",
    },
    {
      refID: "APProc007",
    },
    {
      refID: "APProc008",
    },
  ]
};

module.exports = doc;