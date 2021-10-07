const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc008",
  description: "Proceed to the Arrival Hall and board the designated transport to hotel",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    content: {
      EN: "Proceed to the Arrival Hall and board the designated transport to hotel",
      TC: "前往到達大廳，搭乘指定交通工具前往酒店",
      SC: "前往到达大厅，搭乘指定交通工具前往酒店"
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
  parameters: []
};

module.exports = doc;
