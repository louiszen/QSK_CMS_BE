const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "DOCReq003",
  description: "Positive result proof of a serology antibody test",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    content: {
      EN: "Positive result proof of a serology antibody test",
      TC: "血清抗體測試的陽性結果證明",
      SC: "血清抗体测试的阳性结果证明"
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