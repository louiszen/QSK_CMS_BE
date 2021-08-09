const moment = require('moment');

const doc = {
  _id: "1",
  display: "Mainland China",
  inChina: true,
  priority: 1,
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  lastUpdate:  moment('2021/06/03', 'YYYY/MM/DD')
}

module.exports = doc;