const AllAuth = {
  Dashboard: [],
  Severity: {
    Location: ["Add", "Edit", "Delete"],
    Grouping: ["Add", "Edit", "Delete"],
    SevGroup: ["Add", "Edit", "Delete"],
  },
  Answer: {
    ArrivalAns: {
      Template: ["Add", "Edit", "Delete"],
      Components: {
        QUAReq: ["Add", "Edit", "Delete"],
        DOCReq: ["Add", "Edit", "Delete"],
        ENTReq: ["Add", "Edit", "Delete"],
        APProc: ["Add", "Edit", "Delete"],
        Tips: ["Add", "Edit", "Delete"],
      },
      Miscellaneous: {
        Footnote: ["Add", "Edit", "Delete"],
        IconDocs: ["Add", "Edit", "Delete"],
      }
    },
    DepartAns: {
      Template: ["Add", "Edit", "Delete"],
      Components: {
        CT: ["Add", "Edit", "Delete"],
        TA: ["Add", "Edit", "Delete"],
      },
      Miscellaneous: {
        Loc: ["Add", "Edit", "Delete"],
        Link: ["Add", "Edit", "Delete"],
        VirusTest: ["Add", "Edit", "Delete"],
      }
    },
    TransitAns: {
      Template: ["Add", "Edit", "Delete"],
      Components: ["Add", "Edit", "Delete"],
    }
  },
  Questionnaire: {
    Question: ["Add", "Edit", "Delete"],
    Scenario: ["Add", "Edit", "Delete"],
    QFlow: ["Add", "Edit", "Delete"],
    QOrder: ["Add", "Edit", "Delete"],
    DefaultQ: ["Add", "Edit", "Delete"],
  },
  System: {
    General: ["Add", "Edit", "Delete"],
    User: ["Add", "Edit", "Delete"],
  }
};

module.exports = AllAuth;