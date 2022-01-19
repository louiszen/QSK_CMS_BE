const SYSAuthCtrl = {
  "Level": 0,
  "Groups": {
    "DevResGroup": true
  },
  "Roles": {
    "Devs": true
  },
  "AuthTree": {
    "Dashboard": true,
    "Dashboard.Submit": true,
    "Dashboard.Approve": true,
    "System": true,
    "System.BnR": true,
    "System.BnR.List": true,
    "System.BnR.Add": true,
    "System.BnR.Edit": true,
    "System.BnR.Delete": true,
    "System.UAC": true,
    "System.UAC.General": true,
    "System.UAC.General.View": true,
    "System.UAC.API": true,
    "System.UAC.API.View": true,
    "System.UAC.API.Edit": true,
    "System.UAC.AuthTree": true,
    "System.UAC.AuthTree.View": true,
    "System.UAC.AuthTree.Edit": true,
    "System.UAC.Roles": true,
    "System.UAC.Roles.View": true,
    "System.UAC.Roles.Edit": true,
    "System.UAC.Roles.Add": true,
    "System.UAC.Roles.Delete": true,
    "System.UAC.Groups": true,
    "System.UAC.Groups.View": true,
    "System.UAC.Groups.Edit": true,
    "System.UAC.Groups.Add": true,
    "System.UAC.Groups.Delete": true,
    "System.UAC.Users": true,
    "System.UAC.Users.View": true,
    "System.UAC.Users.Edit": true,
    "System.UAC.Users.Add": true,
    "System.UAC.Users.Delete": true,
    "System.AuthLog": true,
    "System.AuthLog.List": true,
    "System.Tickets": true,
    "System.Tickets.List": true,
    "System.Tickets.Add": true,
    "System.Tickets.Edit": true,
    "System.Tickets.Delete": true,
    "BugReport": true,
    "BugReport.Submit": true
  },
  "Users": {
    "Sys@Dev": true
  }
};

module.exports = SYSAuthCtrl;