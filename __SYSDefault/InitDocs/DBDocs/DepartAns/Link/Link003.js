const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Link003",
  description: "Useful Contacts",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    title: {
      EN: "Useful Contacts",
      TC: "有用的聯繫方式",
      SC: "有用的联系方式"
    },
    bullets: []
  },
  links: [
    {
      lang: "All",
      url: "https://www.hongkongairport.com/en/contact-us/useful-contacts.page"
    }
  ]
};

module.exports = doc;