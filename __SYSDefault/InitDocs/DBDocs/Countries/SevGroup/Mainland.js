const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "MC",
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  display: "Mainland China",
  severity: 99,
  period: 14,
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  }
};

module.exports = doc;