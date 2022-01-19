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
    "System.UAC.List": true,
    "System.UAC.Add": true,
    "System.UAC.Edit": true,
    "System.UAC.Delete": true,
    "System.AuthLog": true,
    "System.AuthLog.List": true,
    "System.Ticket": true,
    "System.Ticket.List": true,
    "System.Ticket.Add": true,
    "System.Ticket.Edit": true,
    "System.Ticket.Delete": true,
    "BugReport": true,
    "BugReport.Submit": true
  },
  "Users": {
    "Sys@Dev": true
  }
};

module.exports = SYSAuthCtrl;