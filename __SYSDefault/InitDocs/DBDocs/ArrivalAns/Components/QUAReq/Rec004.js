const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq004",
  description: "Virus Testing (Only Hotel Test)",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    icon: "Ico0032",
    title: {
      EN: "Virus testing",
      TC: "病毒檢測",
      SC: "病毒检测"
    },
    content: {
      EN: "#1 tests at hotel",
      TC: "在酒店進行測試#1次",
      SC: "在酒店进行测试#1次",
    },
    remark: {
      EN: "",
      TC: "",
      SC: "",
    },
    showCollapse: {
      EN: false,
      TC: false,
      SC: false
    },
    collapse: {
      EN: "",
      TC: "",
      SC: "",
    }
  },
  parameters: [
    {
      description: "No. of Tests at hotel",
      format: "Highlighted Number",
      options: [
        {EN: "2", TC: "2", SC: "2"},
        {EN: "3", TC: "3", SC: "3"},
        {EN: "4", TC: "4", SC: "4"},
        {EN: "6", TC: "6", SC: "6"}
      ]
    }
  ]
};

module.exports = doc;