const config = {
  Console: true,
  AutoInit: true,
  CleanDBInit: true, 
  name: "Quick Starter Kit",
  jwtTokenSecret: "QSK_BE",
  jwtExpire: 1000 * 60 * 60 * 24 * 7,
  Server: {
    port: 7777,
    useHttps: false,
    https: {
      key: "../../151.key",
      cert: "../../151.crt",
      intermediate: "../../intermediate.crt",
      passphrase: "P@ssw0rd",
    },
  },
  Base: {
    DBName: {
      Config: "config",
      User: "user",
    },
    CouchDB: {
      type: "CouchDB",
      include: ["answer", "template", "user", "config", "schema", "intent", "entity", "simulator", "simulator_batch", "talk2elain"],
      envs: {
        local: {
          BASE: "http://",
          USERNAME: "admin",
          PASSWORD: "password",
          URL: "192.168.100.154:5984",
        }
      },
    },
    MongoDB: {
      type: "MongoDB",
      envs: {
        local: {
          BASE: "mongodb+srv://",
          USERNAME: "admin",
          PASSWORD: "zK79wLuarJuKcr8A",
          URL: "clusterfree.x1bip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        }  
      }
    }
  },
  RootUser: {
    username: "root",
    password: "root",
    UserDisplayName: "Root",
    Version: 1,
    Level: 0,
    authority: [],
  },
};

module.exports = config;
