const { ZHash } = require("../IZOGears/_CoreWheels/Utils");

/**
 * @type {user}
 */
const DEVUSER = {
  username: "Sys@Dev",
  password: ZHash.HashPassword("SysP@ssw0rd"),
  UserDisplayName: "Sys@Dev",
  Email: "HiuFai.Yip@gammonconstruction.com",
  TelNo: "63460204",
  Version: 1,
  Level: 0,
  Groups: [{
    ID: "*",
    Level: 0,
    Role: "Devs",
    override: {}
  }],
  Role: "Devs",
  override: {}
};

module.exports = DEVUSER;