const DEVUSER = {
  RootUser: {
    username: "Sys@Dev",
    password: "SysP@ssw0rd",
    UserDisplayName: "Sys@Dev",
    Version: 8,
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
          },
          Miscellaneous: {
            Tips: ["*"],
            Footnote: ["*"],
            IconDocs: ["*"]
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