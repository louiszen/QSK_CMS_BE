const moment = require("moment");

const doc = {
  _id: "4",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "Taiwan",
  details: [
    {
      severity: 3,
      period: 14,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ]
};

module.exports = doc;