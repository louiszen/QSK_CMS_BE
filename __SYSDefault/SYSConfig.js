/**
 * @typedef {("Username-Password" 
 *  | "MSAL" | "SMSOTP" | "EmailOTP"
 *  | "GitHub" | "Facebook" | "Instagram"
 *  | "Twitter" | "Google" | "LinkedIn")} authMethod
 * @typedef {("CouchDB" | "Cloudant" | "MongoDB")} provider
 * 
 * @type {{
 *  General: {
 *    ID: String,
 *    Name: String
 *  },
 *  Server: {
 *    Port: Number,
 *    UseHttps: Boolean,
 *  },
 *  Authentication: {
 *    Method: authMethod | [authMethod],
 *  },
 *  Authorization: {
 *    Method: "JWT",
 *  },
 *  Debug: {
 *    Console: Boolean,
 *    Color: Boolean,
 *    InstanceID: Boolean
 *  },
 *  Init: {
 *    OnStart: Boolean,
 *    CleanDB: Boolean
 *  },
 *  BaseDB: {
 *    Provider: provider,
 *    Backup: {
 *      Include?: "All" | [String],
 *      Exclude?: [String]
 *    },
 *  },
 *  Blob: {
 *    Provider: "Local",
 *    Local?: {
 *      Path: {
 *        Upload: String,
 *        Download: String
 *      }
 *    }
 *  },
 *  LogKeep: {
 *    Request: Number,
 *    SignIn: Number,
 *    Gate: Number
 *  }
 * }}
 */
const SYSConfig = {
  General: {
    ID: "GAuthZ",
    Name: "Gammon Authz (Backend)"
  },
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
  },
  Authorization: {
    Method: "JWT",
  },
  Debug: {
    Console: true,
    Color: true,
    InstanceID: true
  },
  Init: {
    OnStart: true,
    CleanDB: true
  },
  BaseDB: {
    Provider: "MongoDB",
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
    Gate: 12
  }
};

module.exports = SYSConfig;