const _base = require('../../../IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

module.exports = async (dbKey, refID, dateStart, dateEnd) => {

  let db = await _remote.RemoteDB();
  let dbname = await _remote.GetDBName(dbKey);

  let res = await db.Find(dbname, {
    $or: [
      {
        refID: {
          $eq: refID
        },
        effective: {
          Start: {
            $lt: dateEnd
          },
          End: {
            $gt: dateStart
          }
        }
      },
      {
        refID: {
          $eq: refID
        },
        effective: {
          Start: {
            $lt: dateEnd,
          },
          End: {
            $eq: null
          }
        }
      }
    ]
  });

  
  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [catName, actName]));
    return {
      Success: false,
      message: msg
    };
  }

  let docs = res.payload.docs;

  return {
    Success: true,
    payload: docs
  };

}