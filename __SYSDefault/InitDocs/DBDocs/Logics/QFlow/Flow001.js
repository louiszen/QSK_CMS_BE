const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Flow001",
  description: "3 Jun 2021",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  flow: [
    {
      node: "S1",
      type: "severity",
      value: 1,
      next: "S1_QHKR"
    },
    {
      node: "S1_QHKR",
      type: "question",
      ref: "_QHKR",
      parent: "S1",
      yes: "S1_QHKR_Yes",
      no: "S1_QHKR_No"
    },
    {
      node: "S1_QHKR_Yes",
      type: "question",
      ref: "_QAdd1",
      parent: "S1_QHKR",
      
    }
  ]
};

module.exports = doc;