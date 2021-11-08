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
 *    Method: "JWT",
 *    JWT?: {
 *      TokenSecret: String,
 *      Expire: Number
 *    }
 *  },
 *  Authorization: {
 *    Method: "AuthorityTree"
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
 *    Provider: "CouchDB" | "Cloudant" | "MongoDB",
 *    Backup: {
 *      Include?: "All" | [String],
 *      Exclude?: [String]
 *    },
 *    CouchDB?: {
 *      envs: Object.<string, {
 *        BASE: String,
 *        USERNAME: String,
 *        PASSWORD: String,
 *        URL: String
 *      }>
 *    },
 *    Cloudant?: {
 *      envs: Object.<string, {
 *        USERNAME: String,
 *        APIKEY: String
 *      }>
 *    }, 
 *    MongoDB?: {
 *      envs: Object.<string, {
 *        ConnectString: String,
 *        DATABASE: String
 *      } | {
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
    Method: "JWT",
    JWT: {
      TokenSecret: "QSK_BE",
      Expire: 1000 * 60 * 60 * 24 * 7
    }
  },
  Authorization: {
    Method: "AuthorityTree"
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
          ConnectString: "mongodb://digitalg-cosmo-aml:qUN1dhL5xARdSV0xrQI21I8sdFz2jTU7GJjevGW87j7YO1erh3Rh9NJ2AI6dBoc3oZWbS9oNBvnh7J9b2WHgdQ==@digitalg-cosmo-aml.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@digitalg-cosmo-aml@",
          DATABASE: "gptw-dev"
        }
        /*
        local: {
          BASE: "mongodb+srv://",
          USERNAME: "admin",
          PASSWORD: "zK79wLuarJuKcr8A",
          URL: "clusterfree.x1bip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
          DATABASE: "QSK"
        } 
        */ 
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