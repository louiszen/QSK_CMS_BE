const local = require("./local");

/**
 * @type {import("../../IZOGears/__Typedef/SYSConfig").sysconfig}
 */
 const doc = {
  ...local,
  Authentication: {
    Method: ["SMSOTP"],
    TwoFactorExpires: 10
  }
};

module.exports = doc;