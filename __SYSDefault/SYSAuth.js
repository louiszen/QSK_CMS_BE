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
      BnR: ["List", "Add", "Edit", "Delete"],
      UAC: {
        General: ["View"],
        API: ["View", "Edit"],
        AuthTree: ["View", "Edit"],
        Roles: ["View", "Edit", "Add", "Delete"],
        Groups: ["View", "Edit", "Add", "Delete"],
        Users: ["View", "Edit", "Add", "Delete"]
      },
      AuthLog: ["List"],
      Tickets: ["List", "Add", "Edit", "Delete"],
    },
    BugReport: ["Submit"]
  }
};

module.exports = SYSAuth;