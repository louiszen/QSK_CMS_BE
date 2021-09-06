const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc001",
  description: "Follow the signage and proceed to the specimen collection centre",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    content: {
      EN: "Follow the signage and proceed to the specimen collection centre",
      TC: "按照指示牌前往標本採集中心",
      SC: "按照指示牌前往标本采集中心"
    }
  },
  parameters: []
};

module.exports = doc;
