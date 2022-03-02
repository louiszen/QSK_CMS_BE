/**
 * @type {import("../../IZOGears/__Typedef/SYSConfig").sysconfig}
 */
const doc = {
  Server: {
    Port: 7777,
    UseHttps: false,
    Https: {
      Key: "",
      Cert: "",
      Intermediate: "",
      PassPhrase: "",
    }
  },
  Authentication: {
    Method: ["Username-Password", "MSAL", "SMSOTP"],
    TwoFactorExpires: 10,
    SeedChecking: false
  },
  Authorization: {
    Method: "JWT",
    GAuthZ: true,
  },
  Debug: {
    Console: true,
    Color: true,
    InstanceID: true
  },
  Init: {
    OnStart: true,
    CleanDB: true,
    Backup: true
  },
  SyncOnLoad: {
    SysGAuth: true,
    GAuth: false
  },
  RecoverDBOnLoad: {
    Check: true,
    Create: true,
    InitDocs: true
  },
  BaseDB: {
    Provider: "CouchDB",
    Backup: {
      Include: "All"
    },
  },
  Blob: {
    Provider: "Local",
    Local: {
      Path: {
        Upload: "_upload",
        Download: "_download"
      }
    }
  },
  LogKeep: {
    Request: 7,
    SignIn: 7,
    Gate: 12,
    Auth: 6
  },
  Extra: {
    ApplicationInsights: false
  }
};

module.exports = doc;