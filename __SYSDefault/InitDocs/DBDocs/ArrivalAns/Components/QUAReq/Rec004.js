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
      EN: "#1 tests at hotel<br/>#2 of arrival",
      TC: "在酒店進行測試#1次<br/>入境後#2",
      SC: "在酒店进行测试#1次<br/>抵达后#2",
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
        {EN: "2", TC: "2", SC: "2"},
        {EN: "3", TC: "3", SC: "3"},
        {EN: "4", TC: "4", SC: "4"},
        {EN: "6", TC: "6", SC: "6"}
      ]
    },
    {
      description: "Self-serviced compulsory test after quarantine / CTC",
      format: "Highlighted Ordered Number",
      options: [
        {EN: "26th^ day", TC: "第26^日", SC: "第26^日"},
        {EN: "9th#, 12th#, 16th#, 19th# day", TC: "第9#, 12#, 16#, 19#日", SC: "第9#, 12#, 16#, 19#日"},
        {EN: "16th#, 19th# day", TC: "第16#, 19#日", SC: "第16#, 19#日"},
        {EN: "3rd#, 5th#, 9th#, 12th#, 16th#, 19th# day", TC: "第3#, 5#, 9#, 12#, 16#, 19#日", SC: "第3#, 5#, 9#, 12#, 16#, 19#日"},
        {EN: "3rd#, 7th#, 12th#, 16th#, 19th# day", TC: "第3#, 7#, 12#, 16#, 19#日", SC: "第3#, 7#, 12#, 16#, 19#日"},
        {EN: "16th#, 19th^ day", TC: "第16#, 19^日", SC: "第16#, 19^日"},
        {EN: "9th#, 12th#, 16th#, 19th^ day", TC: "第9#, 12#, 16#, 19^日", SC: "第9#, 12#, 16#, 19^日"}
      ]
    }
  ]
};

module.exports = doc;