const local = require("./local");

/**
 * @type {sysconfig}
 */
 const doc = {
  ...local,
  Authentication: {
    Method: ["SMSOTP"],
    TwoFactorExpires: 10
  }
};

module.exports = doc;