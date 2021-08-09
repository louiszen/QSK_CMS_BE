const doc = {
  _id: "CouchDB",
  type: "CouchDB",
  Config: {
    include: [
      "user",
      "config"
    ],
    envs: {
      local: {
        BASE: "http://",
        USERNAME: "root",
        PASSWORD: "root",
        URL: "localhost:5984:5984",
      }
    }
  }
};

module.exports = doc;