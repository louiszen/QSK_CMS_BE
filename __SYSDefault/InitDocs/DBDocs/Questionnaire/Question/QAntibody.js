
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "QAntibody",
  description: "Possesses positive antibody test result (For fully vaccinated pax only)",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  question: {
    EN: "Do you possess positive antibody test result?",
    TC: "您的抗體檢測結果呈陽性嗎？",
    SC: "您的抗体检测结果呈阳性吗？",
  },
  verdict: {
    yes: {
      EN: "Possess positive antibody test result",
      TC: "您的抗體檢測結果呈陽性",
      SC: "您的抗体检测结果呈阳性"
    },
    no: {
      EN: "Possess negative antibody test result",
      TC: "您的抗體檢測結果呈陰性",
      SC: "您的抗体检测结果呈阴性"
    }
  },
  showInfo: false,
  infoContent: {
    EN: "",
    TC: "",
    SC: ""
  },
}

module.exports = doc;