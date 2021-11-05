const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Req0",
  description: "No Entry",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  canEntry: false,
  displayLastUpdate: {
    QUAReq: {
      EN: "",
      TC: "",
      SC: "",
    },
    DOCReq: {
      EN: "",
      TC: "",
      SC: "",
    },
    APProc: {
      EN: "",
      TC: "",
      SC: "",
    },
    Tips: {
      EN: "",
      TC: "",
      SC: "",
    },
  },
  QUAReq: [],
  DOCReq: [],
  ENTReq: [],
  APProc: [],
  Tips: []
};

module.exports = doc;