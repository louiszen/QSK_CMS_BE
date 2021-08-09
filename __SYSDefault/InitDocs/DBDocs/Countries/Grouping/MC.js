const moment = require('moment');

const doc = {
  _id: "1",
  location: "1",
  group: [
    {
      value: "8",
      effective: {
        Start: moment('2021/06/03', 'YYYY/MM/DD'),
        End: null
      }
    }
  ],
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD')

};

module.exports = doc;