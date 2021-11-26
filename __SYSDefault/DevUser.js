const { ZHash } = require("../IZOGears/_CoreWheels/Utils");

/**
 * @type {{
 *  username: String,
 *  password: String,
 *  UserDisplayName: String,
 *  Email: String,
 *  TelNo: String,
 *  Version: Number,
 *  Level: Number,
 *  Groups: [String],
 *  Role: String,
 *  authority: *
 * }}
 */
const DEVUSER = {
  username: "Sys@Dev",
  password: ZHash.HashPassword("SysP@ssw0rd"),
  UserDisplayName: "Sys@Dev",
  Email: "HiuFai.Yip@gammonconstruction.com",
  TelNo: "63460204",
  Version: 1,
  Level: 0,
  Groups: ["*"],
  Role: "Devs",
  authority: {
    Dashboard: ["*"],
    System: {
      BnR: ["*"],
      User: ["*"]
    }
  }
};

module.exports = DEVUSER;