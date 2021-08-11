const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 1,
  description: "Vaccination record",
  template: "numberedlist",
  component: {
    content: {
      EN: "Vaccination record",
      TC: "",
      SC: "",
    }
  }
};

module.exports = doc;