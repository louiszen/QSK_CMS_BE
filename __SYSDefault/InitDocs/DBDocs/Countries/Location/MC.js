const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "MC",
  externalID: "MC",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: {
    EN: "Mainland China",
    TC: "中國大陸",
    SC: "中国大陆"
  },
  inChina: true,
  priority: {
    EN: 1,
    TC: 1,
    SC: 1
  },
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  }
}

module.exports = doc;