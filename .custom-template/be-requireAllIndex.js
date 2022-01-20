const path = require("path");
const _ = require("lodash");
const { Fs } = require("../../../../IZOGears/_CoreWheels/Utils");

module.exports = async () => {
  let link = __dirname;
  let files = await Fs.readdir(link);
  let docs = [];
  _.map(files, (o, i) => {
    if(o === "index.js") return;
    o = path.basename(o);
    docs.push(require("./" + o));
  })
  return docs;
};