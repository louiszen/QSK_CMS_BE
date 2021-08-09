const DEVUSER = {
  RootUser: {
    username: "Sys@Dev",
    password: "SysP@ssw0rd",
    UserDisplayName: "Sys@Dev",
    Version: 6,
    Level: 0,
    authority: {
      Dashboard: ["*"],
      System: {
        General: ["*"]
      }
    }
  }
}

module.exports = DEVUSER;