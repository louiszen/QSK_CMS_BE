const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "A",
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  display: "A",
  severity: 1,
  period: 21,
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  }
};

module.exports = doc;