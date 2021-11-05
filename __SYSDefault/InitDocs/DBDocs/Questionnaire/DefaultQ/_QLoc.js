
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "_QLoc",
  description: "The highest severity among all location(s) the pax has been to during the relevant",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  question: {
    EN: "Where have you been?",
    TC: "你去過哪個地方？",
    SC: "你去過哪个地方？",
  },
  subtitle: {
    EN: "Select from below your boarding location and all places you have stayed in the <span style=\"color: #13579A; font-weight: bold;\">past 21 days </span> before your arrival in Hong Kong:",
    TC: "從下面選擇您的登機地點和您在抵達香港之前<span style=\"color: #13579A; font-weight: bold;\">過去 21 天</span> 的所有經過的地點：",
    SC: "从下面选择您的哈尔滨地点和您在葡萄牙香港之前<span style=\"color: #13579A; font-weight: bold;\"> 21 天</span> 的所有经过的地点：",
  },
  verdict: {
    EN: "Only stayed in @loc the day of boarding for/arrival at Hong Kong or during the @reldays days before that day",
    TC: "僅在登機/抵達香港當天或當天之前的 @reldays 天內在 @loc 逗留",
    SC: "仅在登机/抵达香港当天或当天之前的 @reldays 天内在 @loc 逗留"
  },
  showInfo: false,
  infoContent: {
    EN: "",
    TC: "",
    SC: ""
  }, 
}

module.exports = doc;