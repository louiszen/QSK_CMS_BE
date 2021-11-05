const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Mis002",
  description: "Disclaimer on the arrival wizard question pages & Disclaimer on the shared arrival wizard result page",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    title: {
      EN: "Disclaimer",
      TC: "免責聲明",
      SC: "免责声明"
    },
    content: {
      EN: "The information provided by this tool is only applicable to general travellers 12 years of age or older. \
      It is for reference only and is not legally binding. The final entry quarantine requirements will be determined by \
      the port health personnel in accordance with the current laws, together with the information and relevant certificates \
      provided by the passengers at the time of entry. <br/> For the most up-to-date inbound travel information, \
      please refer to the Government COVID-19 Thematic Website. \
      If the information in this website is inconsistent with that released by the Government, the latter shall prevail.",
      TC: "此工具所提供的信息只適用於 12 歲或以上的一般旅客，僅供參考而不具有法律約束力。\
      最終入境檢疫要求將由口岸衛生人員根據現行法律和旅客入境時提供的資料和相關證明而決定。\
      <br/> 有關本港入境的最新信息，請參閱政府 COVID-19 專題網站。\
      如本網站資料與政府公布的資料有任何不相符之處，應以政府公布為準。",
      SC:"此工具所提供的信息仅适用于 12 岁或以上的一般消费，看起来不具有法律约束力。\
      最终确定要求口口岸卫生人员根据制作法律和消费目的提供资料和相关证明。\
      <br/>有关本港政府的最新信息，请参阅COVID-19专题网站。\
      如本网站资料与政府公布的资料有任何不同，应以政府公布为准。",
    }
  },
};

module.exports = doc;