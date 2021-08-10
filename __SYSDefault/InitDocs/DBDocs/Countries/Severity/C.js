const moment = require("moment");

const doc = {
  _id: "5",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "C",
  details: [
    {
      severity: 4,
      period: 14,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ]
};

module.exports = doc;