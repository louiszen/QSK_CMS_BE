const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  refID: "CN",
  group: "MC",
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  }
};

module.exports = doc;