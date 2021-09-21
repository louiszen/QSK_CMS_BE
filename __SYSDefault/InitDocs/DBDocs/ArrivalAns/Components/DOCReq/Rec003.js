const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DOCReq003",
  description: "Positive result proof of a serology antibody test",
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
      EN: "Positive result proof of a serology antibody test",
      TC: "血清抗體測試的陽性結果證明",
      SC: "血清抗体测试的阳性结果证明"
    }
  },
  parameters: []
};

module.exports = doc;