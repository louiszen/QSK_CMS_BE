const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "CN",
  externalID: "CN",
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
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
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  }
};

module.exports = doc;