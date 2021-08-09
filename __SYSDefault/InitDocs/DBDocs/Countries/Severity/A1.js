const moment = require("moment");

const doc = {
  _id: "1",
  display: "A1",
  destails: [
    {
      severity: 1,
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