let internal = '__Internal';

let cores = {
  Minisite: require('../../cores/Minisite'),
  Base: require('../../IZOGears/Base'),
  Config: require('../../cores/Config'),
  Tables: require('../../cores/Tables'),
  Data: require('../../cores/Data'),
  Output: require('../../cores/Output')
};

try{
  cores.Internal = require('../../cores/' + internal);
  console.log("-- Initializing Internal API --");
}catch{}

module.exports = cores;