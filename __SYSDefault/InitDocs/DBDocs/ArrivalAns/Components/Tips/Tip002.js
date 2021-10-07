const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Tip002",
  description: "Luggage",
  version: 3,
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  effective: {
    Start: moment('2021/06/03', 'YYYY/MM/DD'),
    End: null
  },
  display: {
    icon: "Ico0016",
    title: {
      EN: "You can't access your luggage during the wait.",
      TC: "在等待期間，您無法取放行李。",
      SC: "等候期间您无法取放行李。"
    },
    content: {
      EN: "",
      TC: "",
      SC: "",
    },
    showCollapse: {
      EN: false,
      TC: false,
      SC: false
    },
    collapse: {
      EN: "<p>Carray with you the personal necessities in sufficient quantities to get through the virus test waiting period.</p><p>For example,</p><ul><li>Medications and their record</li><li>Changed power banks for mobile phone and other devices</li><li>Face masks for replacement</li></ul>",
      TC: "<p>隨身攜帶足夠數量的個人必需品，以度過病毒檢測等待期。</p><p>例如</p><ul><li>藥物及其記錄</li><li>更換手機和其他設備的移動電源</li><li>更換口罩</li></ul>",
      SC: "<p>随身携带足够数量的个人必需品，以度过病毒检测等待期。</p><p>例如</p><ul><li>药物及其记录</li><li>更换手机和其他设备的移动电源</li><li>更换口罩</li></ul>",
    }
  },
};

module.exports = doc;