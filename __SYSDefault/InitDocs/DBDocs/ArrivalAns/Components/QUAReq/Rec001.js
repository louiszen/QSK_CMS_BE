const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq001",
  description: "compulsory quarantine",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    icon: "Ico0009",
    title: {
      EN: "Compulsory Quarantine",
      TC: "強制隔離",
      SC: "强制隔离"
    },
    content: {
      EN: "#1",
      TC: "#1",
      SC: "#1",
    },
    remark: {
      EN: "At <a href=\"http://www.google.com\">#2</a>",
      TC: "在 <a href=\"http://www.google.com\">#2</a>",
      SC: "在 <a href=\"http://www.google.com\">#2</a>"
    },
    showCollapse: {
      EN: true,
      TC: true,
      SC: true
    },
    collapse: {
      EN: "TEST",
      TC: "測試",
      SC: "测试",
    }
  },
  parameters: [
    {
      description: "No. of compulsory quarantine days",
      format: "Highlighted Number",
      options: [
        {EN: "7 days", TC: "7日", SC: "7日"},
        {EN: "14 days", TC: "14日", SC: "14日"},
        {EN: "21 days", TC: "21日", SC: "21日"}
      ]
    },
    {
      description: "Compulsory quarantine location",
      format: "Simple Text",
      options: [
        {EN: "designated quarantine hotel", TC: "指定檢疫酒店", SC: "指定检疫酒店"},
        {EN: "home, hotel or other accommodation", TC: "家、酒店或其他住宿", SC: "家、酒店或其他住宿"}
      ]
    }
  ]
};

module.exports = doc;