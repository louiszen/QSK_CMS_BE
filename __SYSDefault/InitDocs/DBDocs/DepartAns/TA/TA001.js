const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "DepTA",
  description: "Travel Advisories by Destination",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  displayLastUpdate: {
    EN: "3 Jun 2021",
    TC: "2021年6月3日",
    SC: "2021年6月3日",
  },
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    showDestinationOptions: true,
    btnCaption: {
      EN: "Select your destination",
      TC: "選擇您的目的地",
      SC: "选择您的目的地"
    },
    title: {
      EN: "Travel Advisories by Destination",
      TC: "目的地旅遊諮詢",
      SC: "目的地旅游咨询"
    },
    subtitle: {
      EN: "Check & Fly Mobile App by the Airports Council International (ACI)",
      TC: "國際機場理事會 (ACI) 的 Check & Fly 移動應用程序",
      SC: "国际机场理事会 (ACI) 的 Check & Fly 移动应用程序"
    },
    content: {
      EN: "Provides passengers with information about the health measures in place at individual airports around the world.",
      TC: "為乘客提供有關全球各個機場採取的健康措施的信息。",
      SC: "为乘客提供有关全球各个机场采取的健康措施的信息。"
    }
  },
  applink: {
    content: {
      EN: "Available on the [apple] and [google].",
      TC: "在 [apple] 和 [google] 上可用。",
      SC: "在 [apple] 和 [google] 上可用。"
    },
    google: {
      caption: {
        EN: "Google Play Store",
        TC: "Google Play Store",
        SC: "Google Play Store"
      },
      url: "api:google",
    },
    apple: {
      caption: {
        EN: "Apple App Store",
        TC: "Apple App Store",
        SC: "Apple App Store"
      },
      url: "api:apple",
    },
  },
  
};

module.exports = doc;