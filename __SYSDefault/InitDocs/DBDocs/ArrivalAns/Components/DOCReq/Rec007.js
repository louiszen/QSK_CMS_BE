const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DOCReq007",
  description: "Designated quarantine hotel room reservation confirmation",
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
      EN: "Designated quarantine hotel room reservation confirmation",
      TC: "指定檢疫酒店房間預訂確認",
      SC: "指定检疫酒店房间预订确认"
    }
  },
  parameters: []
};

module.exports = doc;