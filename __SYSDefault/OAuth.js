const DEVUSER = {
  RootUser: {
    username: "Sys@Dev",
    password: "SysP@ssw0rd",
    UserDisplayName: "Sys@Dev",
    Version: 7,
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
          Template: ["*"],
          Components: {
            QUAReq: ["*"],
            DOCReq: ["*"],
            ENTReq: ["*"],
            APProc: ["*"],
            Tips: ["*"]
          }
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