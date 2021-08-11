const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "A2",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "A2",
  severity: 2,
  period: 21,
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  }
};

module.exports = doc;