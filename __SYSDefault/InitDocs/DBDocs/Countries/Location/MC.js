const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Mainland China",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: {
    EN: "Mainland China",
    TC: "",
    SC: ""
  },
  inChina: true,
  priority: 1,
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  }
}

module.exports = doc;