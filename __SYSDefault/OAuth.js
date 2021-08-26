const DEVUSER = {
  RootUser: {
    username: "Sys@Dev",
    password: "SysP@ssw0rd",
    UserDisplayName: "Sys@Dev",
    Version: 6,
    Level: 0,
    authority: {
      Dashboard: ["*"],
      Severity: {
        Location: ["*"],
        Grouping: ["*"],
        SevGroup: ["*"]
      },
      Answer: {
        ArrivalAns: {
          ArrivalAns: ["*"],
          QUAReq: ["*"],
          DOCReq: ["*"],
          ENTReq: ["*"],
          APProc: ["*"]
        },
        DepartAns: ["*"],
        TransitAns: ["*"]
      },
      Questionnaire: {
        Question: ["*"],
        Scenario: ["*"],
        QFlow: ["*"],
        QOrder: ["*"]
      },
      System: {
        General: ["*"]
      }
    }
  }
}

module.exports = DEVUSER;