const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Link001",
  description: "Airline Infomration and Contacts",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    title: {
      EN: "Airline Infomration and Contacts",
      TC: "航空公司信息和聯繫方式",
      SC: "航空公司信息和联系方式"
    },
    bullets: [],
    links: [
      {
        lang: "All",
        url: "https://www.hongkongairport.com/en/flights/airlines-information/airlines.page"
      }
    ]
  },
  
};

module.exports = doc;