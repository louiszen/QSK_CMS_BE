const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "APProc007",
  description: "Proceed to immigration check and reclaim baggage",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null,
  },
  display: {
    content: {
      EN: "Proceed to immigration check and reclaim baggage",
      TC: "前往出入境檢查並提取行李",
      SC: "前往出入境检查并提取行李",
    },
    showCollapse: {
      EN: false,
      TC: false,
      SC: false,
    },
    collapse: {
      EN: "",
      TC: "",
      SC: "",
    },
  },
  parameters: [],
};

module.exports = doc;
