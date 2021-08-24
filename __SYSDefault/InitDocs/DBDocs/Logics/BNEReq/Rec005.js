const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "BNEReq005",
  description: "Documentary proof for recognized testing institution (Wechat Mini Program screenshot for Return2HK Scheme)",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    type: "orderedlist",
    content: {
      EN: "Documentary proof for recognized testing institution",
      TC: "認可檢測機構的證明文件",
      SC: "认可检测机构的证明文件"
    }
  },
  parameters: []
};

module.exports = doc;