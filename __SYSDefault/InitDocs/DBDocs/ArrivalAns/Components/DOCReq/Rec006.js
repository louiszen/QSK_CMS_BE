const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DOCReq006",
  description: "Green QR code obtained in HKSAR electronic health declaration system",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    content: {
      EN: "Green QR code obtained in HKSAR electronic health declaration system",
      TC: "香港特區電子健康申報系統獲得綠色二維碼",
      SC: "香港特区电子健康申报系统获得绿色二维码"
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