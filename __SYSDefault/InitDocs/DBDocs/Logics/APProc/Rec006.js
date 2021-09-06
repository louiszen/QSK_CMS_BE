const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc006",
  description: "Wait for the test result at the holding area",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    content: {
      EN: "Wait for the test result at the holding area",
      TC: "在等候區等待檢測結果",
      SC: "在等候区等待检测结果"
    }
  },
  parameters: []
};

module.exports = doc;
