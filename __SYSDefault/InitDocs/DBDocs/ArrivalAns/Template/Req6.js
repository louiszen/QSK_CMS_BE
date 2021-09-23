const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Req6",
  description: "Template 6",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  canEntry: true,
  QUAReq: [
    {
      refID: "QUAReq002",
      parameters: ["14 days"]
    },
    {
      refID: "QUAReq003",
      parameters: []
    },
    {
      refID: "QUAReq006",
      parameters: ["3rd#, 5th#, 9th#, 12th#, 16th#, 19th# day"]
    }
  ],
  DOCReq: [
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
  ],
  ENTReq: [],
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
      refID: "APProc006",
      parameters: []
    },
    {
      refID: "APProc007",
      parameters: []
    },
  ]
};

module.exports = doc;