const moment = require("moment");

const doc = {
  _id: "8",
  display: "Mainland China",
  destails: [
    {
      severity: 99,
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