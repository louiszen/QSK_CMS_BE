const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Link002",
  description: "Shop and Restaurants at HKIA",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    title: {
      EN: "Shop and Restaurants at HKIA",
      TC: "香港國際機場的商店和餐廳",
      SC: "香港国际机场的商店和餐厅"
    },
    bullets: [
      {
        EN: "Limited Service for some Airport Shops and Restaurants",
        TC: "部分機場商店和餐廳服務有限",
        SC: "部分机场商店和餐厅服务有限"
      }
    ],
    links: [
      {
        lang: "All",
        url: "https://www.hongkongairport.com/en/COVID19.page"
      }
    ]
  },
  
};

module.exports = doc;