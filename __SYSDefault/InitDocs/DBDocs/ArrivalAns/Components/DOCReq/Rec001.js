const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DOCReq001",
  description: "Recognised Vaccination record",
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
    content: {
      EN: "Recognised Vaccination record",
      TC: "認可的疫苗接種記錄",
      SC: "认可的疫苗接种记录"
    }
  },
  parameters: []
};

module.exports = doc;