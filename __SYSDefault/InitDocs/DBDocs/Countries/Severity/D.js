const moment = require("moment");

const doc = {
  _id: "6",
  display: "D",
  destails: [
    {
      severity: 5,
      period: 14,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ],
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD')
};

module.exports = doc;