const { v1 } = require("uuid");
const moment = require('moment');

const doc = {
  _id: v1(),
  refID: "Eligible",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
}

module.exports = doc;