const DEVUSER = {
  RootUser: {
    username: "Sys@Dev",
    password: "SysP@ssw0rd",
    UserDisplayName: "Sys@Dev",
    Version: 8,
    Level: 0,
    authority: {
      Dashboard: ["*"],
      Landing: ["*"],
      IconDocs: ["*"],
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
            Tips: ["*"],
          },
          Miscellaneous: {
            Footnote: ["*"]
          }
        },
        DepartAns: {
          Template: ["*"],
          Components: {
            CT: ["*"],
            TA: ["*"]
          },
          Miscellaneous: {
            Loc: ["*"],
            Link: ["*"],
            VirusTest: ["*"]
          }
        },
        TransitAns: {
          Template: ["*"],
          Components: ["*"]
        }
      },
      Questionnaire: {
        Question: ["*"],
        Scenario: ["*"],
        QFlow: ["*"],
        QOrder: ["*"],
        DefaultQ: ["*"]
      },
      System: {
        BnR: ["*"],
        User: ["*"]
      }
    }
  }
}

module.exports = DEVUSER;