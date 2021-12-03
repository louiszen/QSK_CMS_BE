/**
 * @type {sysauth}
 */
const SYSAuth = {
  AuthTree:{
    Dashboard: ["Submit", "Approve"],
    System: {
      BnR: ["Add", "Edit", "Delete"],
      User: ["Add", "Edit", "Delete"],
    }
  }
};

module.exports = SYSAuth;