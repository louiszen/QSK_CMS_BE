const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "QUAReq004",
  description: "No. of self-monitoring days after compulsory quarantine",
  format: "bool",
};

module.exports = doc;