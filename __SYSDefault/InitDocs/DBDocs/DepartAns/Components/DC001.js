const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DC001",
  description: "Travel Advisories by Destination",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
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
  }
  
};

module.exports = doc;