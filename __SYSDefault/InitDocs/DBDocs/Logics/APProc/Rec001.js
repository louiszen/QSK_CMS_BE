const moment = require('moment');

const doc = {
  _id: "1",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 1,
  description: "Follow the signage and procedd to the specimen collection centre",
  template: "circlenumberedlist",
  component: {
    content: {
      EN: "Follow the signage and procedd to the specimen collection centre",
      TC: "",
      SC: "",
    }
  }
};

module.exports = doc;