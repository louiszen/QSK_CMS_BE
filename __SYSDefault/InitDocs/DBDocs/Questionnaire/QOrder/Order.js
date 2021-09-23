const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Order",
  description: "3 Jun 2021",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  pre: [
    "_QDate",
    "_QHKR",
    "_QLoc"
  ],
  post: [
    "Q2Hours",
    "QVaccinated",
    "QReturn2HK",
    "QAntibody"
  ]
};

module.exports = doc;