/**
 * @type {[{
 *  username: String,
 *  password: String,
 *  UserDisplayName: String,
 *  Version: Number,
 *  Level: Number,
 *  authority: *
 * }]}
 */
const DEVUSERS = [
  {
    username: "Sys@Dev",
    password: "SysP@ssw0rd",
    UserDisplayName: "Sys@Dev",
    Version: 8,
    Level: 0,
    authority: {
      System: {
        BnR: ["*"],
        User: ["*"]
      }
    }
  }
];

module.exports = DEVUSERS;