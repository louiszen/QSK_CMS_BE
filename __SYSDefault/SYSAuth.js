/**
 * @type {sysauth}
 */
 const SYSAuth = {
  Level: [0, 999],
  Groups: [],
  Roles: ["Devs"],
  AuthTree:{
    Dashboard: ["Submit", "Approve"],
    System: {
      BnR: ["Add", "Edit", "Delete"],
      User: ["Add", "Edit", "Delete"],
    }
  }
};

module.exports = SYSAuth;