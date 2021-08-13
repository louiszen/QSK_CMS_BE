const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "QUAReq003",
  description: "No. of self-monitoring days after compulsory quarantine",
  format: "number",
};

module.exports = doc;