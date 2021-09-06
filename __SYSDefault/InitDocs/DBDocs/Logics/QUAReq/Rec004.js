const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq004",
  description: "Virus Testing",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
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
      EN: "#1 tests at hotel<br/>#2 day of arrival<br/>#3 day of arrival",
      TC: "在酒店進行測試#1次<br/>入境後第#2天<br/>入境後第#3天",
      SC: "在酒店进行测试#1次<br/>抵达后第#2天<br/>抵达后第#3天",
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
      format: "number"
    },
    {
      description: "Self-serviced compulsory test after quarantine",
      format: "array",
      separator: ","
    },
    {
      description: "Compulsory test at CTC after quarantine",
      format: "array",
      separator: ","
    }
  ]
};

module.exports = doc;