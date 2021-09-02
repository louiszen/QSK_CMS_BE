
const moment = require('moment');
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "QAdd3",
  description: "Fully vaccinated",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  type: "yesno",
  order: 6,
  question: {
    EN: "Have you fully vaccinated?",
    TC: "您是否已全面接種疫苗？",
    SC: "您是否已全面接种疫苗？",
  },
  showInfo: true,
  infoPage: "Mis006",
}

module.exports = doc;