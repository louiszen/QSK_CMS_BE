const moment = require("moment");

const doc = {
  _id: "2",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "A2",
  details: [
    {
      severity: 2,
      period: 21,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ]
};

module.exports = doc;