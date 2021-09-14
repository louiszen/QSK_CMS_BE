const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Loc001",
  description: "Australia",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    caption: {
      EN: "Australia",
      TC: "澳洲",
      SC: "澳大利亚"
    },
    url: {
      EN: "http://www.google.com",
      TC: "http://www.google.com",
      SC: "http://www.google.com"
    }
  },
};

module.exports = doc;