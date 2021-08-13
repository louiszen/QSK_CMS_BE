const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "QUAReq001",
  description: "No. of compulsory quarantine days",
  format: "number",
};

module.exports = doc;