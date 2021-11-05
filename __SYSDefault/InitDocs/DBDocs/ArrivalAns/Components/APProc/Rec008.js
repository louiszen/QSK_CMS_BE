const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "APProc008",
  description: "Proceed to the Arrival Hall and board the designated transport to hotel",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null,
  },
  display: {
    content: {
      EN: "Proceed to Arrival Hall and board the arranged coach to designated quarantine hotel",
      TC: "前往出境大堂乘坐政府安排專車前往指定檢疫酒店",
      SC: "前往出境大堂乘坐政府安排专车前往指定检疫酒店",
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
