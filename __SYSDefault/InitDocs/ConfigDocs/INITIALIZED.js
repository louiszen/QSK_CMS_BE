const { Time } = require("../../../IZOGears/_CoreWheels/Utils");
// eslint-disable-next-line no-unused-vars
const moment = require("moment");

/**
 * DOC that for IZOGears to recognized initialized project
 * 
 * @type {{
 *  _id: "INITIALIZED",
 *  Created: moment.Moment
 * }}
 */
const doc = {
  _id: "INITIALIZED",
  Created: Time.Now(),
};

module.exports = doc;
