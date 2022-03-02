const ZHash = require("../IZOGears/COGS/ZGate/ZHash");

/**
 * @type {sysuser}
 */
const DEVUSER = {
  _id: "Sys@Dev",
  password: ZHash.HashPassword("SysP@ssw0rd"),
  UserDisplayName: "Sys@Dev",
  Company: "gammon",
  Email: "HiuFai.Yip@gammonconstruction.com",
  TelNo: "63460204",
  Version: 1,
  Level: 0,
  Groups: [{
    ID: "J0000",
    override: {}
  }],
  Role: "SYSDevs",
  override: {}
};

module.exports = DEVUSER;