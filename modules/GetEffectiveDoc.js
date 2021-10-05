const _base = require('../IZOGears/__ZBase');
const _remote = require('../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;
const moment = require('moment');
const _ = require('lodash');
const { Time } = require('../IZOGears/__ZBase/Utils');

/**
 * 
 * @param {String} dbKey 
 * @param {String} refID 
 * @param {moment.Moment} date 
 * @returns 
 */
module.exports = async (dbKey, refID, date) => {

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
            $lt: date,
          },
          End: {
            $gt: date
          }
        }
      },
      {
        refID: {
          $eq: refID
        },
        effective: {
          Start: {
            $lt: date,
          },
          End: {
            $eq: null
          }
        }
      },
      {
        refID: {
          $eq: refID
        },
        effective: {
          Start: {
            $lt: date,
          },
          End: {
            $exists: false
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
  let doc = null;
  if(docs.length == 0){
    let msg = "Cannot find related documents."
    return {
      Success: false,
      message: msg
    };
  }else if(docs.length > 1){
    doc = _.find(docs, o => _.isNull(o.effective.End));
  }else{
    doc = docs[0];
  }

  let expired = false;

  if(doc.effective){
    if(!_.isNull(doc.effective.End)){
      let endTime = Time.Parse(doc.effective.End);
      if(endTime < Time.Now()){
        expired = true;
      }
    }
  }

  return {
    Success: true,
    payload: {
      doc: doc,
      expired: expired
    }
  };

  

}