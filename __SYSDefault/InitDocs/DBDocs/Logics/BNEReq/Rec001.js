const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "BNEReq001",
  description: "Vaccination record",
  content: {
    EN: "Vaccination record",
    TC: "",
    SC: "",
  }
};

module.exports = doc;