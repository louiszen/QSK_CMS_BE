const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "Tip003",
  description: "Free bottled water",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    icon: "Ico0013",
    content: {
      EN: "Free bottled water (hot water upon request) and light snacks will be provided at the specimen collection centre.",
      TC: "標本採集中心將提供免費瓶裝水（應要求提供熱水）和小吃。",
      SC: "标本采集中心将提供免费瓶装水（应要求提供热水）和小吃。"
    },
    showCollapse: {
      EN: false,
      TC: false,
      SC: false
    },
    collapse: {
      EN: "",
      TC: "",
      SC: "",
    }
  },
};

module.exports = doc;