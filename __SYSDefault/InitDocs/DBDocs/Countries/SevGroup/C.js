const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "C",
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  display: "C",
  severity: 3,
  period: 14,
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  }
};

module.exports = doc;