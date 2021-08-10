const moment = require("moment");

const doc = {
  _id: "1",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  display: "A1",
  details: [
    {
      severity: 1,
      period: 21,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ]
};

module.exports = doc;