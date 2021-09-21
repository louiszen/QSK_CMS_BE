const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Tra002",
  description: "Mainland & Macao Connection",
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
    title: {
      EN: "Mainland & Macao Connection",
      TC: "內地與澳門連接",
      SC: "内地与澳门连接"
    },
    content: {
      EN: "<p>Transfer/transit services at HKIA for passengers from airports in Mainland China have resumed.<br/>However, transit/transfer services to destinations in Mainland China remain unavailable at HKIA.</p>\
        <p>Sea-to-air transfer ferry service from Shenzhen Shekou Port to SkyPier of HKIA has resumed. Other ferry services from Mainland China and Macao ports remain unavailable. For the latest ticketing arrangement for Shekou to SkyPier, please check with the ferry operator at http://www.cksp.com.hk/en.</p>\
        <p> Air-to-sea transfer services to Mainland China and Macao ports also remain unavailable at HKIA.</p>",
      TC: "<p>香港國際機場已恢復為來自中國大陸機場的旅客提供中轉/中轉服務。<br/>但是，香港國際機場仍不提供前往中國大陸目的地的中轉/中轉服務。</p>\
        <p>深圳蛇口港至香港國際機場海天碼頭的海空中轉渡輪服務已恢復。其他來自中國大陸和澳門港口的渡輪服務仍不可用。\
        有關蛇口至海天碼頭的最新票務安排，請參閱渡輪營運商 http://www.cksp.com.hk/en。</p>\
        <p>香港國際機場也仍然無法提供前往中國大陸和澳門港口的空海中轉服務。</p>",
      SC: "<p>香港国际机场已恢复为来自中国大陆机场的旅客提供中转/中转服务。<br/>但是，香港国际机场仍不提供前往中国大陆目的地的中转/中转服务。</p>\
        <p>深圳蛇口港至香港国际机场海天码头的海空中转渡轮服务已恢复。其他来自中国大陆和澳门港口的渡轮服务仍不可用。\
        有关蛇口至海天码头的最新票务安排，请参阅渡轮营运商 http://www.cksp.com.hk/en。</p>\
        <p>香港国际机场也仍然无法提供前往中国大陆和澳门港口的空海中转服务。</p>"
    }
  },
  parameters: []
};

module.exports = doc;