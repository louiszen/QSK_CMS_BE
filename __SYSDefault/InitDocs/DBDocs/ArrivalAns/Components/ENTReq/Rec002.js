const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "ENTReq002",
  description: "StayHomeSafe mobile app",
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
      EN: "StayHomeSafe mobile app",
      TC: "StayHomeSafe 移動應用程序",
      SC: "StayHomeSafe 移动应用程序"
    }
  },
  parameters: []
};

module.exports = doc;