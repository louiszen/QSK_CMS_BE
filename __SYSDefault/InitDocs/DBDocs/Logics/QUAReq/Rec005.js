const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "QUAReq005",
  description: "No. of tests at designated quarantine hotel",
  format: "number",
};

module.exports = doc;