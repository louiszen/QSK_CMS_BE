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
    type: "withicon",
    icon: "/QUAReq004.png",
    title: {
      EN: "Virus testing",
      TC: "病毒檢測",
      SC: "病毒检测"
    },
    content: {
      EN: "$1 tests at hotel<br/>$2 day of arrival",
      TC: "在酒店進行測試$1次<br/>入境後第$2天",
      SC: "在酒店进行测试$1次<br/>抵达后第$2天",
    },
    remark: {
      EN: "<point char=\"*\">Follow the instructions of the port health staff at the airport to complete the test.</point><br/>\
      <point char=\"*\">You must undergo the test by attending one of the <url=\"http://www.google.com\">Community Testing Centres</url></point>",
      TC: "<point char=\"*\">按照機場口岸衛生人員的指示完成檢測。</point><br/>\
      <point char=\"*\">您必須通過參加其中一個<url=\"http://www.google.com\">社區測試中心</url>來接受測試</point>",
      SC: "<point char=\"*\">按照機場口岸衛生人員的指示完成檢測。</point><br/>\
      <point char=\"*\">您必須參加其中一個<url=\"http://www.google.com\">社區測試中心</url>來接受測試</point>",
    }
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
    }
  ]
};

module.exports = doc;