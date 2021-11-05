const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "APProc004",
  description: "Provide your contact phone number",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null,
  },
  display: {
    content: {
      EN: "Provide your contact phone number",
      TC: "提供你的聯絡電話",
      SC: "提供你的联络电话",
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
