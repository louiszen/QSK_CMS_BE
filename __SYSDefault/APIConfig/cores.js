let internal = "__Internal";

let cores = {
  CommonAPI: require("../../IZOGears/CommonAPI"),
  Config: require("../../cores/Config"),
  Data: require("../../cores/Data"),
  Tables: require("../../cores/Tables")
};

try{
  cores.Internal = require("../../cores/" + internal);
  console.log("-- Initializing Internal API --");
}catch{}

module.exports = cores;