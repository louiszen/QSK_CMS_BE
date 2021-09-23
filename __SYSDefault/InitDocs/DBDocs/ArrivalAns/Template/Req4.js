const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Req4",
  description: "Template 4",
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
      parameters: ["7 days", "designated quarantine hotel"]
    },
    {
      refID: "QUAReq002",
      parameters: ["7 days"]
    },
    {
      refID: "QUAReq003",
      parameters: []
    },
    {
      refID: "QUAReq004",
      parameters: ["2", "9th#, 12th#, 16th#, 19th^ day"]
    }
  ],
  DOCReq: [
    {
      refID: "DOCReq002",
      parameters: []
    },
    {
      refID: "DOCReq004",
      parameters: []
    },
    {
      refID: "DOCReq005",
      parameters: []
    },
    {
      refID: "DOCReq006",
      parameters: []
    },
    {
      refID: "DOCReq007",
      parameters: []
    },
  ],
  ENTReq: [
    {
      refID: "ENTReq001",
      parameters: []
    },
    {
      refID: "ENTReq002",
      parameters: []
    },
  ],
  APProc: [
    {
      refID: "APProc001",
      parameters: []
    },
    {
      refID: "APProc002",
      parameters: []
    },
    {
      refID: "APProc003",
      parameters: []
    },
    {
      refID: "APProc004",
      parameters: []
    },
    {
      refID: "APProc005",
      parameters: []
    },
    {
      refID: "APProc006",
      parameters: []
    },
    {
      refID: "APProc007",
      parameters: []
    },
    {
      refID: "APProc008",
      parameters: []
    },
  ]
};

module.exports = doc;