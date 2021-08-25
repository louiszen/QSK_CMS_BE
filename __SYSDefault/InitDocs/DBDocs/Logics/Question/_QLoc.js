
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "_QLoc",
  description: "The highest severity among all location(s) the pax has been to during the relevant",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  type: "severity",
  order: 3,
  question: {
    EN: "Where have you been?",
    TC: "你去過哪個地方？",
    SC: "你去過哪个地方？",
  },
  subtitle: {
    EN: "Select from below your boarding location and all places you have stayed in the <bold>past 21 days </bold> before your arrival in Hong Kong:",
    TC: "從下面選擇您的登機地點和您在抵達香港之前<bold>過去 21 天</bold> 的所有經過的地點：",
    SC: "从下面选择您的哈尔滨地点和您在葡萄牙香港之前<bold> 21 天</bold> 的所有经过的地点：",
  },
}

module.exports = doc;