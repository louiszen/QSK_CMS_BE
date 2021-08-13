const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "QUAReq006",
  description: "Self-serviced compulsory test after quarantine",
  format: "array",
  separator: ",",
  ordinal: true
};

module.exports = doc;