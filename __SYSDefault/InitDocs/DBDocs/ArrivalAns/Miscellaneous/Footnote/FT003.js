const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "FT003",
  description: "CTCs",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  symbol: "^",
  display: {
    content: {
      EN: "You can undergo the test by returning specimen collection bottles or attending one of the CTCs.",
      TC: "您可以通過退回樣本收集瓶或參加其中一個 CTC 來進行測試。",
      SC: "您可以通过退回样本收集瓶或参加其中一个 CTC 来进行测试。",
    }
  }
};

module.exports = doc;