const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "TraAns",
  description: "Transition answer",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  Components: [
    {
      refID: "Tra001",
    },
    {
      refID: "Tra002",
    }
  ],
};

module.exports = doc;