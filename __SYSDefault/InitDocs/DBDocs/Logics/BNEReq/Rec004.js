const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "BNEReq004",
  description: "Negative result proof of a nucleic acid test (Original paper format for Return2HK Scheme)",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    type: "orderedlist",
    content: {
      EN: "Negative result proof of a nucleic acid test",
      TC: "核酸檢測陰性結果證明",
      SC: "核酸检测阴性结果证明"
    }
  },
  parameters: []
};

module.exports = doc;