const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc002",
  description: "Present your health declaration QR code",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  displayLastUpdate: {
    EN: "3 Jun 2021",
    TC: "2021年6月3日",
    SC: "2021年6月3日",
  },
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    content: {
      EN: "Present your health declaration QR code",
      TC: "出示您的健康聲明二維碼",
      SC: "出示您的健康声明二维码"
    }
  },
  parameters: []
};

module.exports = doc;
