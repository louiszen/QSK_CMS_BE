const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DOCReq002",
  description: "Vaccination record",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    content: {
      EN: "Vaccination record",
      TC: "疫苗接種記錄",
      SC: "疫苗接种记录"
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