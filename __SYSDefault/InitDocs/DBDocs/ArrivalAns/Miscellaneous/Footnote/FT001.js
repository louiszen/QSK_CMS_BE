const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "FT001",
  description: "First day virus testing",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  symbol: "*",
  display: {
    content: {
      EN: "Follow the instructions of the port health staff at the airport to complete the test.",
      TC: "按照機場港口衛生人員的指示完成檢測。",
      SC: "按照机场港口卫生人员的指示完成检测。",
    }
  }
};

module.exports = doc;