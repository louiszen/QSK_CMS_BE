const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "QUAReq003",
  description: "compulsory test at HKIA upon arrival",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    type: "withicon",
    icon: "/QUAReq003.png",
    title: {
      EN: "Compulsory test at HKIA upon arrival",
      TC: "抵達香港國際機場後進行強制性測試",
      SC: "抵达香港国际机场后进行强制性测试"
    },
    content: {
      EN: "",
      TC: "",
      SC: "",
    },
    remark: {
      EN: "",
      TC: "",
      SC: "",
    },
    footnote: false
  },
  parameters: []
};

module.exports = doc;