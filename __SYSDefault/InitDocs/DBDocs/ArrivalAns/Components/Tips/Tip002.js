const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Tip002",
  description: "Luggage",
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
    icon: "/Tip002.png",
    title: {
      EN: "You can't access your luggage during the wait.",
      TC: "在等待期間，您無法取放行李。",
      SC: "等候期间您无法取放行李。"
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