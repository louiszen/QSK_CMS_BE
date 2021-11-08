const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "DOCReq007",
  description: "Designated quarantine hotel room reservation confirmation",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    content: {
      EN: "Designated quarantine hotel room reservation confirmation",
      TC: "指定檢疫酒店房間預訂確認",
      SC: "指定检疫酒店房间预订确认"
    },
    showCollapse: {
      EN: false,
      TC: false,
      SC: false
    },
    collapse: {
      EN: "",
      TC: "",
      SC: "",
    }
  },
  parameters: []
};

module.exports = doc;