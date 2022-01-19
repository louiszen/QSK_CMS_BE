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
      UAC: ["List", "Add", "Edit", "Delete"],
      AuthLog: ["List"],
      Tickets: ["List", "Add", "Edit", "Delete"],
    },
    BugReport: ["Submit"]
  }
};

module.exports = SYSAuth;