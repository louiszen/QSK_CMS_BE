const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Mis004",
  description: "Sharing",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    caption: {
      EN: "I would like to share with you the Hong Kong entry and quarantine requirements under COVID-19…",
      TC: "我想與你分享 COVID-19 下香港的入境及檢疫要求…",
      SC: "我想与你分享 COVID-19 下香港的病毒及检疫要求…"
    },
    content: {
      EN: "I would like to share with you the Hong Kong entry and quarantine requirements under COVID-19 ...\
      Click here for details: [Link to share]\
      =============================================\
      My HKG - You Fly We Care",
      TC: "我想與你分享 COVID-19 下香港的入境及檢疫要求 ...\
      按此了解詳情：[Link to share]\
      =============================================\
      My HKG - You Fly We Care",
      SC: "我想与你分享 COVID-19 下香港的通信及检疫要求 ...\
      更多此了解详情：[链接分享]\
      =============================================\
      我的香港 - 你飞我们在乎",
    },
    update: {
      title: {
        EN: "Update Notification",
        TC: "更新通知",
        SC: "更新通知"
      },
      content: {
        EN: "The HKSAR Government has updated the travel restrictions since your last input. \
        Please fill-in the form again to view the latest entry and quarantine requirements of Hong Kong. Thank you.",
        TC: "香港特別行政區政府在你上次填表後更新了旅行限制。請你重新輸入以查看香港最新的入境及檢疫要求，謝謝。",
        SC: "香港特别行政区政府你上次表后更新了旅行限制。请你重输入以查看香港最新的包裹及入境要求，谢谢。"
      }
    }
  },
};

module.exports = doc;