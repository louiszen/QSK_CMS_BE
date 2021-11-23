/**
 * @type {{
 *  username: String,
 *  password: String,
 *  UserDisplayName: String,
 *  Version: Number,
 *  Level: Number,
 *  Groups: [String],
 *  Role: String,
 *  authority: *
 * }}
 */
const DEVUSER = {
  username: "Sys@Dev",
  password: "SysP@ssw0rd",
  UserDisplayName: "Sys@Dev",
  Version: 1,
  Level: 0,
  Groups: ["*"],
  Role: "Devs",
  authority: {
    Dashboard: ["*"],
    Submission: ["*"],
    SubmitPermit: ["*"],
    System: {
      BnR: ["*"],
      User: ["*"]
    }
  }
};

module.exports = DEVUSER;