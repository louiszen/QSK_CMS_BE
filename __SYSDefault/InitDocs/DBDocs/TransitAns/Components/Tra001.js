const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Tra001",
  description: "Transfer / Transit",
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
      EN: "Transfer / Transit",
      TC: "轉機 / 過境",
      SC: "转机 / 过境"
    },
    content: {
      EN: "<p>You can use air transit/transfer services at Hong Kong International Airport (HKIA) if: </p>\
        <ul><li>You meet the entry requirements of the final destination</li>\
        <li>Use the same air ticket for flights operated by different airlines.</li>\
        <li>You have checked through at the origin port with your boarding passes printed and baggage tagged-through to the final destination.</li></ul>\
        <p>Airlines may have added requirements on boarding. Please check with airlines for details</p>",
      TC: "<p>您可以在香港國際機場 (HKIA) 使用航空中轉/中轉服務，如果：</p>\
        <ul><li>您符合最終目的地的入境要求</li>\
        <li>為不同航空公司運營的航班使用同一張機票。</li>\
        <li>您已經在始發港辦理了登機手續，並打印了登機牌並在行李上貼上了到達最終目的地的標籤。</li></ul>\
        <p>航空公司可能對登機有額外的要求。 詳情請諮詢航空公司</p>",
      SC: "您可以在香港国际机场 (HKIA) 使用航空中转/中转服务，如果：</p>\
        <ul><li>您符合最终目的地的入境要求</li>\
        <li>为不同航空公司运营的航班使用同一张机票。</li>\
        <li>您已经在始发港办理了登机手续，并打印了登机牌并在行李上贴上了到达最终目的地的标签。</li></ul>\
        <p>航空公司可能对登机有额外的要求。 详情请咨询航空公司</p>"
    }
  },
  parameters: []
};

module.exports = doc;