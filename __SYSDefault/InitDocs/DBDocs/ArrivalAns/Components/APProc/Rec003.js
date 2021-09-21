const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc003",
  description: "Provide samples for COVID-19 testing",
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
      EN: "Provide samples for COVID-19 testing",
      TC: "為 COVID-19 測試提供樣本",
      SC: "为 COVID-19 测试提供样本"
    }
  },
  parameters: []
};

module.exports = doc;
