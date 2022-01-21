const path = require("path");
const _ = require("lodash");
const fs = require("fs");

module.exports = async () => {
  let link = __dirname;
  let files = await fs.promises.readdir(link);
  let docs = [];
  _.map(files, (o, i) => {
    if(o === "index.js") return;
    o = path.basename(o);
    docs.push(require("./" + o));
  })
  return docs;
};