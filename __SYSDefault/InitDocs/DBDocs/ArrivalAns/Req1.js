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