const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc004",
  description: "Provide your contact phone number",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    type: "circled",
    content: {
      EN: "Provide your contact phone number",
      TC: "提供您的聯繫電話",
      SC: "提供您的联系电话"
    }
  },
  parameters: []
};

module.exports = doc;
