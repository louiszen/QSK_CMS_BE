const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "VT001",
  description: "Prenetics",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    title: {
      EN: "Prenetics",
      TC: "Prenetics",
      SC: "Prenetics"
    },
    bullets: [
      {
        EN: "Testing fee: HK$499",
        TC: "測試費用：HK$499",
        SC: "测试费用：HK$499"
      },
      {
        EN: "An appointment at least 4 hours prior to your boarding time to allow sufficient time for completing the test and obtaining test result on the same day",
        TC: "至少在登機時間前 4 小時預約，以便有足夠的時間在同一天完成測試並獲得測試結果",
        SC: "至少在登机时间前 4 小时预约，以便有足够的时间在同一天完成测试并获得测试结果"
      },
      {
        EN: "Booking will be closed 2 hours prior to the appointment time",
        TC: "預約將在預約時間前2小時關閉",
        SC: "预约将在预约时间前2小时关闭"
      }
    ],
    map: {
      caption: {
        EN: "Counter A03, L5, Terminal 1 (across Arrivals Hall A)",
        TC: "1 號航站樓 L5 A03 櫃檯（入境大廳 A 對面）",
        SC: "1 号航站楼 L5 A03 柜台（入境大厅 A 对面）"
      },
      url: {
        EN: "",
        TC: "",
        SC: ""
      }
    },
    service: {
      caption: {
        EN: "0930 - 1330hrs and 1430 - 1830hrs daily",
        TC: "0930 - 1330hrs and 1430 - 1830hrs daily",
        SC: "0930 - 1330hrs and 1430 - 1830hrs daily",
      },
      clock: [
        {
          start: "0930",
          end: "1330"
        },
        {
          start: "1430",
          end: "1830"
        }
      ],
      remarks: {
        EN: "(subject to change based on operational needs)",
        TC: "（可能會根據運營需要進行更改）",
        SC: "（可能会根据运营需要进行更改）"
      }
    },
    phone: {
      caption: {
        EN: "For General enquiries",
        TC: "一般查詢",
        SC: "一般查询"
      },
      value: {
        EN: "+852 12345678",
        TC: "+852 12345678",
        SC: "+852 12345678"
      }
    },
    url: {
      EN: "https://fly.prenetics.com",
      TC: "https://fly.prenetics.com",
      SC: "https://fly.prenetics.com"
    }
  },
};

module.exports = doc;