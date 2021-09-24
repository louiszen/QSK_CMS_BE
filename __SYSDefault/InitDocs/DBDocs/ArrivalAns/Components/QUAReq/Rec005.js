const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq005",
  description: "Virus Testing (Only after QUA)",
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
    icon: "Ico0027",
    title: {
      EN: "Virus testing",
      TC: "病毒檢測",
      SC: "病毒检测"
    },
    content: {
      EN: "#1 of arrival",
      TC: "入境後#1",
      SC: "抵达后#1",
    },
    remark: {
      EN: "",
      TC: "",
      SC: "",
    },
  },
  parameters: [
    {
      description: "Self-serviced compulsory test after quarantine / CTC",
      format: "Highlighted Ordered Number",
      incFootnote: true,
      options: [
        {EN: "1st*, 26th^ day", TC: "第1*, 26^日", SC: "第1*, 26^日"},
        {EN: "1st*, 9th#, 12th#, 16th#, 19th# day", TC: "第1*, 9#, 12#, 16#, 19#日", SC: "第1*, 9#, 12#, 16#, 19#日"},
        {EN: "1st*, 16th#, 19th# day", TC: "第1*, 16#, 19#日", SC: "第1*, 16#, 19#日"},
        {EN: "1st*, 3rd#, 5th#, 9th#, 12th#, 16th#, 19th# day", TC: "第1*, 3#, 5#, 9#, 12#, 16#, 19#日", SC: "第1*, 3#, 5#, 9#, 12#, 16#, 19#日"},
        {EN: "1st*, 3rd#, 7th#, 12th#, 16th#, 19th# day", TC: "第1*, 3#, 7#, 12#, 16#, 19#日", SC: "第1*, 3#, 7#, 12#, 16#, 19#日"},
        {EN: "1st*, 16th#, 19th^ day", TC: "第1*, 16#, 19^日", SC: "第1*, 16#, 19^日"},
        {EN: "1st*, 9th#, 12th#, 16th#, 19th^ day", TC: "第1*, 9#, 12#, 16#, 19^日", SC: "第1*, 9#, 12#, 16#, 19^日"}
      ]
    }
  ]
};

module.exports = doc;