const moment = require('moment');

const doc = {
  _id: "1",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  location: "1",
  value: "8",
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  }
};

module.exports = doc;