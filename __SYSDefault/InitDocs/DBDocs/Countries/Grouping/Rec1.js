const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "MC",
  group: "MC",
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  }
};

module.exports = doc;