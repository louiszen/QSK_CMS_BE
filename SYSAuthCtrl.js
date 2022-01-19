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
    "System.BnR.Add": true,
    "System.BnR.Edit": true,
    "System.BnR.Delete": true,
    "System.User": true,
    "System.User.Add": true,
    "System.User.Edit": true,
    "System.User.Delete": true
  },
  "Users": {
    "Sys@Dev": true
  }
};

module.exports = SYSAuthCtrl;