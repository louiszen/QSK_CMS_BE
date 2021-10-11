const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "APProc002",
  description: "Present your Health & Quarantine Information Declaration QR code",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD"),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD"),
    End: null,
  },
  display: {
    content: {
      EN: "Present your health declaration QR code",
      TC: "出示你的健康及檢疫資訊申報二維碼",
      SC: "出示你的健康及检疫资讯申报二维码",
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
