const { v1 } = require("uuid");
const moment = require('moment');

const doc = {
  _id: v1(),
  refID: "Transition",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
}

module.exports = doc;