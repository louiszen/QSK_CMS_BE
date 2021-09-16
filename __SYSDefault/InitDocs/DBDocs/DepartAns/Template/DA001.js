const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DA001",
  description: "Departure Answer",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  prewordings: {
    EN: "Entry restrictions vary by destination and airlines may have additional boarding requirements. You are advised to visit the government website suggested in below travel advisories, and consult the airline representative for details.",
    TC: "入境限制因目的地而異，航空公司可能有額外的登機要求。 建議您訪問以下旅行建議中建議的政府網站，並諮詢航空公司代表了解詳情。",
    SC: "入境限制因目的地而异，航空公司可能有额外的登机要求。 建议您访问以下旅行建议中建议的政府网站，并咨询航空公司代表了解详情。"
  },
  showTA: true,
  showCT: true,
  showOTH: true,
  links: [
    {
      refID: "Link001"
    },
    {
      refID: "Link002"
    },
    {
      refID: "Link003"
    }
  ]
};

module.exports = doc;