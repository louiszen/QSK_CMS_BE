const moment = require("moment");

const doc = {
  _id: "2",
  display: "A2",
  destails: [
    {
      severity: 2,
      period: 21,
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ],
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD')
};

module.exports = doc;