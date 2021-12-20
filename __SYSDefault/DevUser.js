const { ZHash } = require("../IZOGears/_CoreWheels/Utils");

/**
 * @type {sysuser}
 */
const DEVUSER = {
  _id: "Sys@Dev",
  password: ZHash.HashPassword("SysP@ssw0rd"),
  UserDisplayName: "Sys@Dev",
  Company: "Gammon",
  Email: "HiuFai.Yip@gammonconstruction.com",
  TelNo: "63460204",
  Version: 1,
  Level: 0,
  Groups: [{
    ID: "DevResGroup",
    Level: 0,
    Role: "Devs",
    override: {}
  }],
  Role: "Devs",
  override: {}
};

module.exports = DEVUSER;