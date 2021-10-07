const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Req8",
  description: "Template 8",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  canEntry: true,
  displayLastUpdate: {
    QUAReq: {
      EN: "3 Jun 2021",
      TC: "2021年6月3日",
      SC: "2021年6月3日",
    },
    DOCReq: {
      EN: "3 Jun 2021",
      TC: "2021年6月3日",
      SC: "2021年6月3日",
    },
    APProc: {
      EN: "3 Jun 2021",
      TC: "2021年6月3日",
      SC: "2021年6月3日",
    },
    Tips: {
      EN: "3 Jun 2021",
      TC: "2021年6月3日",
      SC: "2021年6月3日",
    },
  },
  QUAReq: [
    {
      refID: "QUAReq001",
      parameters: ["14 days", "home, hotel or other accommodation"]
    },
    {
      refID: "QUAReq005",
      parameters: ["1st*, 3rd#, 7th#, 12th#, 16th#, 19th# day"]
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
  ],
  Tips: [
    {
      refID: "Tip001",
      parameters: []
    },
    {
      refID: "Tip002",
      parameters: []
    },
    {
      refID: "Tip003",
      parameters: []
    }
  ]
};

module.exports = doc;