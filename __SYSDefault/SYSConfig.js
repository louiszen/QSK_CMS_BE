/**
 * @type {{
 *  General: {
 *    Name: String
 *  },
 *  Server: {
 *    Port: Number,
 *    UseHttps: Boolean,
 *    Https?: {
 *      key: String,
 *      cert: String,
 *      intermediate: String,
 *      passphrase: String
 *    }
 *  },
 *  Authentication: {
 *    Mode: "JWT",
 *    JWT?: {
 *      TokenSecret: String,
 *      Expire: Number
 *    }
 *  },
 *  Authorization: {
 *    Mode: "AuthorityTree"
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
 *    Provider: "CouchDB" | "MongoDB",
 *    Backup: "All" | [String],
 *    CouchDB?: {
 *      envs: Object.<string, {
 *        BASE: String,
 *        USERNAME: String,
 *        PASSWORD: String,
 *        URL: String
 *      }>
 *    },
 *    MongoDB?: {
 *      envs: Object.<string, {
 *        BASE: String,
 *        USERNAME: String,
 *        PASSWORD: String,
 *        URL: String,
 *        DATABASE: String
 *      }>
 *    }
 *  },
 *  Blob: {
 *    Provider: "Local",
 *    Local?: {
 *      Path: {
 *        Upload: String,
 *        Download: String
 *      }
 *    }
 *  }
 * }}
 */
const config = {
  General: {
    Name: "Quick Start Kit"
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
    Mode: "JWT",
    JWT: {
      TokenSecret: "QSK_BE",
      Expire: 1000 * 60 * 60 * 24 * 7
    }
  },
  Authorization: {
    Mode: "AuthorityTree"
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
    Provider: "CouchDB",
    CouchDB: {
      envs: {
        local: {
          BASE: "http://",
          USERNAME: "root",
          PASSWORD: "root",
          URL: "localhost:5984",
        } 
      }
    },
    MongoDB: {
      envs: {
        local: {
          BASE: "mongodb+srv://",
          USERNAME: "admin",
          PASSWORD: "zK79wLuarJuKcr8A",
          URL: "clusterfree.x1bip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
          DATABASE: "QSK"
        }  
      }
    }
  },
  Blob: {
    Provider: "Local",
    Local: {
      Path: {
        Upload: "_upload",
        Download: "_download"
      }
    }
  }
};

module.exports = config;