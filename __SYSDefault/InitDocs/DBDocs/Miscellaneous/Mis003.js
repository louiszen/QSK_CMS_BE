const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Mis002",
  description: "Persistent banner at the top of the arrival wizard result pages",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    content: {
      EN: "If the information below is inconsistent with that released by the Government, the latter shall prevail.",
      TC: "如以下資料與政府公布的資料有任何不相符之處，應以政府公布為準。",
      SC: "如以下资料与政府公布的资料有任何不同，应以政府公布为准。",
    }
  },
};

module.exports = doc;