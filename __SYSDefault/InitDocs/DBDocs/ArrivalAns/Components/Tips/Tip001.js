const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Tip001",
  description: "Virus test time",
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
    type: "withicon",
    icon: "Ico0006",
    title: {
      EN: "It takes approximately 2 to hours (but could be up to 12 hours or more during busy days) to get the virus test result.",
      TC: "獲得病毒檢測結果大約需要 2 到幾個小時（但在繁忙的日子可能需要長達 12 小時或更長時間）。",
      SC: "获得病毒检测结果大约需要 2 到几个小时（但在繁忙的日子可能需要长达 12 小时或更长时间）。"
    },
    content: {
      EN: "",
      TC: "",
      SC: "",
    },
    collapse: {
      EN: false,
      TC: false,
      SC: false,
    }
  },
};

module.exports = doc;