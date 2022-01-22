const _DBMAP_IZO = require("../IZOGears/_CoreWheels/_DBMAP_IZO");

/**
 * keys start with _ OR end with $ 
 * will NOT automatically create on initialization
 * which are used for combination or runtime purpose.
 */

const _DBMAP = {
  ..._DBMAP_IZO
};

module.exports = _DBMAP;