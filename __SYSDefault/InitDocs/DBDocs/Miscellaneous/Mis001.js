const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "Mis001",
  description: "Bottom of the landing page",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    title: {
      EN: "NOTICE",
      TC: "注意",
      SC: "注意"
    },
    content: {
      EN: "The information regarding the COVID-19 related travel restrictions \
        and measures on this website is collected from the official websites of the HKSAR Government or other place, \
        It is for reference only and is not legally binding. Due to the constant changes in the epidemic situation, \
        before traveling, you must consult the HKSAR or the destination government’s information \
        issuing channel to obtain the latest entry and quarantine requirements."
      ,
      TC: "本網站與2019冠狀病毒疫情相關的旅遊限制和措施的信息，均收集自香港特別行政區政府或其他地方之官方網站，\
        僅供參考，不具有法律約束力。由於疫情不斷變化，\
        出行前請務必諮詢香港特別行政區或目的地政府之信息發方渠道以獲取最新的入境及檢疫要求。",
      SC: "本网站与2019冠状病毒疫情相关的旅游限制和措施的信息，\
            均自香港特别行政区政府或其他地方之官方网站，\
            由于疫情不断变化， 出行前请务必咨询香港特别行政区或政府部门的信息发方要求以获取最新的传播及检疫要求。",
    }
  },
};

module.exports = doc;