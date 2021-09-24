const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq002",
  description: "Self-monitoring",
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
    icon: "Ico002",
    title: {
      EN: "Self-monitoring after compulsory quarantine",
      TC: "強制隔離後的自我監測",
      SC: "强制隔离后的自我监测"
    },
    content: {
      EN: "#1",
      TC: "#1",
      SC: "#1",
    },
    remark: {
      EN: "<url href=\"http://www.google.com\">Points to note </url> regarding self-monitory period",
      TC: "關於自我監控期的<url href=\"http://www.google.com\">注意事項</url>",
      SC: "关于自我监控期的<url href=\"http://www.google.com\">注意事项</url>",
    },
  },
  parameters: [
    {
      description: "No. of self-monitoring days after compulsory quarantine",
      format: "Highlighted Number",
      options: [
        {EN: "7 days", TC: "7日", SC: "7日"},
        {EN: "14 days", TC: "14日", SC: "14日"}
      ]
    }
  ]
};

module.exports = doc;