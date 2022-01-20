/**
 * Authority settings. Full authority of this project.
 * @type {sysauth}
 */
 const SYSAuth = {
  Level: [0, 999],
  Groups: [],
  Roles: ["Devs"],
  AuthTree:{
    Dashboard: ["Submit", "Approve"],
    System: {
      BnR: ["Database", "Backup", "Restore", "Delete"],
      UAC: {
        General: ["View", "Edit"],
        API: ["View", "Edit"],
        AuthTree: ["View", "Edit"],
        Roles: ["View", "Terminate", "Edit", "Add", "Delete", "TreeView", "TreeEdit"],
        Groups: ["View", "Terminate", "Edit", "Add", "Delete", 
          "UserView", "UserTerminate", "UserAdd", "UserEdit", "UserDelete"],
        Users: ["View", "Terminate", "Edit", "Add", "Delete", 
          "TreeView", "TreeEdit", "GroupView", "GroupAdd", "GroupEdit", "GroupDelete"]
      },
      AuthLog: ["List"],
      Tickets: ["List", "Add", "Edit", "Delete"],
    },
    BugReport: ["Submit"],
  }
};

module.exports = SYSAuth;