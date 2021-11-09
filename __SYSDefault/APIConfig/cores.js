let internal = "__Internal";

let cores = {
  Minisite: require("$/cores/Minisite"),
  CommonAPI: require("$/IZOGears/CommonAPI"),
  Config: require("$/cores/Config"),
  Tables: require("$/cores/Tables"),
  Data: require("$/cores/Data"),
  Output: require("$/IZOGears/GENERIC/Output")
};

try{
  cores.Internal = require("$/cores/" + internal);
  console.log("-- Initializing Internal API --");
}catch{}

module.exports = cores;