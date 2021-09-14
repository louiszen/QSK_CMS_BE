const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "TraAns001",
  description: "Transition answer",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  Components: [
    {
      refID: "Tra001",
    },
    {
      refID: "Tra002",
    }
  ],
};

module.exports = doc;