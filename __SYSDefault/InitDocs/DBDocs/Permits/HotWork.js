const doc = {
  _id: "HotWork",
  name: {
    EN: "Hot Work Permit",
    TC: "熱工作許可證"
  },
  steps: [
    {
      name: {
        EN: "Application",
        TC: "申請許可証"
      },
      role: "Subcontractor",
      form: "Application"
    },
    {
      name: {
        EN: "Approval",
        TC: "簽發許可証"
      },
      role: "Foreman",
      form: "Approval"
    },
    {
      name: {
        EN: "Acknowledgement",
        TC: "簽收許可証"
      },
      role: "Subcontractor",
      form: "Acknowledgement"
    },
    {
      name: {
        EN: "Completion",
        TC: "宛成工作"
      },
      role: "Foreman",
      form: "Completion"
    }
  ]
};

module.exports = doc;