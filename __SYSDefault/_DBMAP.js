/**
 * keys start with _ OR end with $ 
 * will NOT automatically create on initialization
 * which are used for combination or runtime purpose.
 */

/**
 * @type {Object.<string, String>}
 */
const _DBMAP = {
  User: "user",
  Config: "config",
  UserRole: "userrole",
  ResGroup: "resgroup",
};

module.exports = _DBMAP;