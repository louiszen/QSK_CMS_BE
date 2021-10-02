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
module.exports = async (dbKey, date) => {

  let db = await _remote.RemoteDB();
  let dbname = await _remote.GetDBName(dbKey);

  let res = await db.Find(dbname, {
    $or: [
      {
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
  let temp = [];
  let rtnDocs = [];

  _.map(docs, (o, i) => {
    let existDoc = _.find(temp, v => v.refID === o.refID);
    if(existDoc){
      if(!_.isNull(existDoc.endDate)){
        if(existDoc.endDate < o.effective.End){
          delete existDoc;
          temp.push({
            refID: o.refID,
            endDate: o.effective.End,
            _id: o._id
          });
        }
      }
    }else{
      temp.push({
        refID: o.refID,
        endDate: o.effective.End,
        _id: o._id
      });
    }
  });

  _.map(temp, (o, i) => {
    let doc = _.find(docs, v => v._id === o._id);
    rtnDocs.push(doc);
  });

  return {
    Success: true,
    payload: rtnDocs
  };
  

}