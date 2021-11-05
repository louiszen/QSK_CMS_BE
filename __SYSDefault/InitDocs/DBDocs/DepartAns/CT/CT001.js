const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "DepCT",
  description: "COVID-19 Test for Passengers at HKIA",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  displayLastUpdate: {
    EN: "3 Jun 2021",
    TC: "2021年6月3日",
    SC: "2021年6月3日",
  },
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  display: {
    title: {
      EN: "COVID-19 Test for Passengers at HKIA",
      TC: "香港國際機場乘客的 COVID-19 測試",
      SC: "香港国际机场乘客的 COVID-19 测试"
    },
    content: {
      EN: "You may be required to have a negative COVID-19 test result for your trip. COVID-19 testing services for departure passengers are available at Hong Kong International Airport. Contact the provider directly to check if the provided test fit your destination's requirement. Passengers are advised to book the test in advance.",
      TC: "您的旅行可能需要提供陰性的 COVID-19 測試結果。 香港國際機場為離境旅客提供 COVID-19 檢測服務。 直接聯繫提供商以檢查提供的測試是否符合您目的地的要求。 建議乘客提前預約測試。",
      SC: "您的旅行可能需要提供阴性的 COVID-19 测试结果。 香港国际机场为离境旅客提供 COVID-19 检测服务。 直接联系提供商以检查提供的测试是否符合您目的地的要求。 建议乘客提前预约测试。"
    }
  },
  tests: [
    {
      refID: "VT001"
    }
  ]
  
};

module.exports = doc;