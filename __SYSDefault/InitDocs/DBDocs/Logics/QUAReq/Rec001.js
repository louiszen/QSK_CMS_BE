const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq001",
  description: "compulsory quarantine",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    type: "withicon",
    icon: "/QUAReq001.png",
    title: {
      EN: "Compulsory Quarantine",
      TC: "強制隔離",
      SC: "强制隔离"
    },
    content: {
      EN: "$1 days",
      TC: "$1 日",
      SC: "$1 日",
    },
    remark: {
      EN: "At <url href=\"http://www.google.com\">$2</url>",
      TC: "在 <url href=\"http://www.google.com\">$2</url>",
      SC: "在 <url href=\"http://www.google.com\">$2</url>"
    }
  },
  parameters: [
    {
      description: "No. of compulsory quarantine days",
      format: "number",
    },
    {
      description: "Compulsory quarantine location",
      format: "select",
      options: [
        {EN: "Designated quarantine hotel", TC: "指定檢疫酒店", SC: "指定检疫酒店"},
        {EN: "Home, hotel or other accomodation", TC: "家、酒店或其他住宿", SC: "家、酒店或其他住宿"}
      ]
    }
  ]
};

module.exports = doc;