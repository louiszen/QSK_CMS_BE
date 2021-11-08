const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "Mis005",
  description: "Landing page",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    title: {
      main: {
        EN: "COVID-19 Information Hub",
        TC: "2019冠狀病毒病資訊中心",
        SC: "2019冠状病毒病资讯中心"
      },
      sub: {
        EN: "You Fly We Care",
        TC: "You Fly We Care",
        SC: "You Fly We Care"
      }
    },
    arrival: {
      main: {
        EN: "Arriving in Hong Kong",
        TC: "抵港",
        SC: "抵港"
      },
      sub: {
        EN: "Answer a few questions to find out if you may be allowed to enter Hong Kong, and the requirements you need to meet. (For general passengers aged 12 or above)",
        TC: "回答幾個問題以了解你是否可以獲准進入香港，以及所須要求。（適用於12歲或以上一般旅客）",
        SC: "回答几个问题以了解你是否可以获准进入香港，以及要求。（适用于12岁或以上一般生活所需）",
      }
    },
    departure: {
      main: {
        EN: "Departing from Hong Kong",
        TC: "離港",
        SC: "离港"
      },
      sub: {
        EN: "Find out the latest entry requirements of your destination.",
        TC: "了解你目的地的最新入境要求。",
        SC: "了解你目的地的最新要求。"
      }
    },
    transition: {
      main: {
        EN: "Transiting through Hong Kong",
        TC: "過境",
        SC: "过境"
      },
      sub: {
        EN: "Information on travelling through Hong Kong International Airport.",
        TC: "香港國際機場過境資訊。",
        SC: "香港国际机场过境资讯。"
      }
    },
    notice: {
      main: {
        EN: "NOTICE. The information regarding the COVID-19 related travel restrictions and measures on this website is collected from the official websites of the HKSAR Government or other place, \
        It is for reference only and is not legally binding. Due to the constant changes in the epidemic situation, before traveling, \
        you must consult the HKSAR or the destination government’s information issuing channel to obtain the latest entry and quarantine requirements.",
        TC: "注意：本網站與2019冠狀病毒疫情相關的旅遊限制和措施的信息，均收集自香港特別行政區政府或其他地方之官方網站，\
        僅供參考，不具有法律約束力。由於疫情不斷變化，出行前請務必諮詢香港特別行政區或目的地政府之信息發方渠道以獲取最新的入境及檢疫要求。",
        SC: "注意：本网站与2019年冠状病毒疫情相关的旅游限制和措施的信息，均自收集香港行政区政府或其他地方的特别官方网站，\
         由于疫情不断变化，出发前请参加香港特别行政区或目的地政府之发方宣传活动，以获取最新信息及解除要求。"
      }
    }
  }
};

module.exports = doc;