const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Tip002",
  description: "Luggage",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
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
    remark: {
      EN: "",
      TC: "",
      SC: "",
    }
  },
};

module.exports = doc;