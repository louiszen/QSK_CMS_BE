const moment = require("moment");

const doc = {
  _id: "8",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "Mainland China",
  details: [
    {
      severity: 99,
      period: 14,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ]
};

module.exports = doc;