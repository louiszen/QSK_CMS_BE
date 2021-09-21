const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "APProc004",
  description: "Provide your contact phone number",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  displayLastUpdate: {
    EN: "3 Jun 2021",
    TC: "2021年6月3日",
    SC: "2021年6月3日",
  },
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    content: {
      EN: "Provide your contact phone number",
      TC: "提供您的聯繫電話",
      SC: "提供您的联系电话"
    }
  },
  parameters: []
};

module.exports = doc;
