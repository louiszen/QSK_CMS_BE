const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Tip003",
  description: "Free bottled water",
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
    type: "withicon",
    icon: "/Tip003.png",
    title: {
      EN: "Free bottled water (hot water upon request) and light snacks will be provided at the specimen collection centre.",
      TC: "標本採集中心將提供免費瓶裝水（應要求提供熱水）和小吃。",
      SC: "标本采集中心将提供免费瓶装水（应要求提供热水）和小吃。"
    },
    content: {
      EN: "",
      TC: "",
      SC: "",
    },
    collapse: {
      EN: false,
      TC: false,
      SC: false,
    }
  },
};

module.exports = doc;