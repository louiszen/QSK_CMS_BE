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
      severity: 1,
      next: "S1_QHKR",
      pos: [0, 0]
    },
    {
      node: "S1_QHKR",
      type: "question",
      ref: "_QHKR",
      parent: "S1",
      yes: "S1_QAdd1",
      no: "S1_Ans0",
      pos: [1, 0],
      severity: 1,
    },
    {
      node: "S1_QAdd1",
      type: "question",
      ref: "QAdd1",
      parent: "S1_QHKR",
      yes: "S1_QAdd3",
      no: "S1_Ans1",
      pos: [2, 0],
      severity: 1,
    },
    {
      node: "S1_Ans0",
      type: "answer",
      ref: "Req0",
      parent: "S1_QHKR",
      pos: [1, 1],
      severity: 1,
    },
    {
      node: "S1_Ans1",
      type: "answer",
      ref: "Req1",
      parent: "S1_QAdd1",
      pos: [2, 1],
      severity: 1,
    },
    {
      node: "S1_QAdd3",
      type: "question",
      ref: "QAdd3",
      yes: "S1_Ans2",
      no: "S1_Ans3",
      pos: [3, 0],
      severity: 1,
    },
    {
      node: "S1_Ans3",
      type: "answer",
      ref: "Req0",
      parent: "S1_QAdd3",
      pos: [3, 1],
      severity: 1,
    },
    {
      node: "S1_Ans2",
      type: "answer",
      ref: "Req1",
      parent: "S1_QAdd3",
      pos: [4, 0],
      severity: 1,
    },
    {
      node: "S2",
      type: "severity",
      next: "S2_QHKR",
      severity: 2,
      pos: [0, 0]
    },
    {
      node: "S2_QHKR",
      type: "question",
      ref: "_QHKR",
      parent: "S2",
      pos: [1, 0],
      severity: 2,
    },
    {
      node: "S3",
      type: "severity",
      severity: 3,
      pos: [0, 0]
    },
    {
      node: "S4",
      type: "severity",
      severity: 4,
      pos: [0, 0]
    },
    {
      node: "S5",
      type: "severity",
      severity: 5,
      pos: [0, 0]
    },
    {
      node: "S99",
      type: "severity",
      severity: 99,
      pos: [0, 0]
    },
  ]
};

module.exports = doc;