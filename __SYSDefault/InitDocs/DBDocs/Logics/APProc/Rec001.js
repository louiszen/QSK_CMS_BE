const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "APProc001",
  description: "Follow the signage and proceed to the specimen collection centre",
  content: {
    EN: "Follow the signage and proceed to the specimen collection centre",
    TC: "",
    SC: "",
  }
};

module.exports = doc;