const doc = {
  _id: "F416",
  name: {
    EN: "220V Permit to Work",
    TC: "200V 工作許可證"
  },
  steps: [
    {
      name: {
        EN: "Basic Information for Application",
        TC: "基本申請資料"
      },
      role: "Subcontractor",
      form: "Application"
    },
    {
      name: {
        EN: "Acknowledgement of Application",
        TC: "確認申請"
      },
      role: "SiteAgent",
      form: "Acknowledgement"
    },
    {
      name: {
        EN: "Coordination with Procurement",
        TC: "諮詢採購部"
      },
      role: "SafetyTeam",
      form: "Coordination"
    },
    {
      name: {
        EN: "Approval of Application",
        TC: "批准申請"
      },
      role: "PIC",
      form: "Approval"
    },
    {
      name: {
        EN: "Installation of PRCD Set  ",
        TC: "安裝漏電斷路器組合"
      },
      role: "GammonREW",
      form: "Installation"
    },
    {
      name: {
        EN: "Acceptance of the Permit",
        TC: "接受許可證"
      },
      role: "Subcontractor",
      form: "Acceptance"
    },
    {
      name: {
        EN: "Cancellation of the Permit",
        TC: "註銷許可證"
      },
      role: "GammonREW",
      form: "Cancellation"
    }
  ]
};

module.exports = doc;