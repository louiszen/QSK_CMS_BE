const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "Macao",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "Macao",
  severity: 99,
  period: 14,
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  }
};

module.exports = doc;