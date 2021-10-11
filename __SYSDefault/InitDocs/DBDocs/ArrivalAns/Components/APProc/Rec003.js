const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "APProc003",
  description: "Provide samples for COVID-19 testing",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD"),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD"),
    End: null,
  },
  display: {
    content: {
      EN: "Provide samples for virus testing",
      TC: "提供病毒檢測樣本",
      SC: "提供病毒检测样本",
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
