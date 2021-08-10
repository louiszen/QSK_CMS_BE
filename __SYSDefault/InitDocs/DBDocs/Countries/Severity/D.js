const moment = require("moment");

const doc = {
  _id: "6",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "D",
  details: [
    {
      severity: 5,
      period: 14,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ]
};

module.exports = doc;