const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc005",
  description: "Put on electronic wristband and activate the StayHomeSafe mobile app",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    type: "circled",
    content: {
      EN: "Put on electronic wristband and activate the StayHomeSafe mobile app",
      TC: "戴上電子腕帶並激活 StayHomeSafe 移動應用程序",
      SC: "戴上电子腕带并激活 StayHomeSafe 移动应用程序"
    }
  },
  parameters: []
};

module.exports = doc;
