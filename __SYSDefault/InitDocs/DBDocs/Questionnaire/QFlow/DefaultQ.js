const moment = require('moment');
const { v1 } = require('uuid');

let s1 = v1();
let s2 = v1();
let s3 = v1();
let s4 = v1();
let s5 = v1();
let s99 = v1();

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
      id: s1,
      type: "Tube_Src",
      data: {
        inner: "Severity 1"
      },
      position: { x: 100, y: 100}
    },
    {
      id: s2,
      type: "Tube_Src",
      data: {
        inner: "Severity 2"
      },
      position: { x: 300, y: 100}
    },
    {
      id: s3,
      type: "Tube_Src",
      data: {
        inner: "Severity 3"
      },
      position: { x: 500, y: 100}
    },
    {
      id: s99,
      type: "Tube_Src",
      data: {
        inner: "Severity 99"
      },
      position: { x: 700, y: 100}
    }
  ]
};

module.exports = doc;