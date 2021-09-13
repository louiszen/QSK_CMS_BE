const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "Taiwan",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "Taiwan",
  severity: 2,
  period: 14,
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  }
};

module.exports = doc;