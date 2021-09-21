const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq004",
  description: "Virus Testing",
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
    icon: "Ico004",
    title: {
      EN: "Virus testing",
      TC: "病毒檢測",
      SC: "病毒检测"
    },
    content: {
      EN: "#1 tests at hotel<br/>#2 day of arrival",
      TC: "在酒店進行測試#1次<br/>入境後第#2天",
      SC: "在酒店进行测试#1次<br/>抵达后第#2天",
    },
    remark: {
      EN: "",
      TC: "",
      SC: "",
    },
    footnote: true,
  },
  parameters: [
    {
      description: "No. of Tests at hotel",
      format: "Highlighted Number",
      options: [
        {EN: "2 days", TC: "2日", SC: "2日"},
        {EN: "4 days", TC: "4日", SC: "4日"},
        {EN: "6 days", TC: "6日", SC: "6日"}
      ]
    },
    {
      description: "Self-serviced compulsory test after quarantine / CTC",
      format: "Highlighted Ordered Number",
      options: [
        {EN: "3rd, 7th, 12th, 16th, 19th day", TC: "第3, 7, 12, 16, 19日", SC: "第3, 7, 12, 16, 19日"}
      ]
    }
  ]
};

module.exports = doc;