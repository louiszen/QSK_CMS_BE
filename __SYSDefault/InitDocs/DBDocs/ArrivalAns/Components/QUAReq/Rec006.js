const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq006",
  description: "Virus Testing (Only after QUA)",
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
      EN: "#1 day of arrival",
      TC: "入境後第#1天",
      SC: "抵达后第#1天",
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
      description: "Self-serviced compulsory test after quarantine / CTC",
      format: "Highlighted Ordered Number",
      options: [
        {EN: "3rd, 7th, 12th, 16th, 19th day", TC: "第3, 7, 12, 16, 19日", SC: "第3, 7, 12, 16, 19日"}
      ]
    }
  ]
};

module.exports = doc;