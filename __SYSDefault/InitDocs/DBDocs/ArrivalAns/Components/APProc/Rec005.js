const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "APProc005",
  description: "Put on electronic wristband and activate the StayHomeSafe mobile app",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null,
  },
  display: {
    content: {
      EN: "Put on electronic wristband and activate the StayHomeSafe mobile app",
      TC: "戴上電子腕帶並激活 「居安抗疫」流動應用程式",
      SC: "戴上电子腕带并激活 「居安抗疫」流动应用程式",
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
