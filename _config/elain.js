const config = {
  Console: true,
  AutoInit: true,
  name: "HKAA COVID19 (Backend)",
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
  },
  RootUser: {
    username: "root",
    password: "root",
    UserDisplayName: "Root",
    Version: 4,
    Level: 1,
    authority: {
    },
  },
};

module.exports = config;
