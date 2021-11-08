const _base = require('$/IZOGears/_CoreWheels');
const _remote = require('$/remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const {Chalk, Response} = _base.Utils;

const express = require('express');

/**
 * 
 * @param {*} _opt 
 * @param {{
 *  cat: String,
 *  subcat: String,
 *  action: String
 * }} _param
 * @returns 
 */
module.exports = async (_opt, _param) => {
  
  let db = _remote.BaseDB();
  let dbname = DBNAME[catName];

  let res = {Success: false, payload: {}};

  console.log(Chalk.CLog("[-]", "<MESSAGE>", [_param.cat, _param.subcat]));

  if(!res.Success){
    let msg = res.payload.Message;
    console.log(Chalk.CLog("[!]", msg, [_param.cat, _param.subcat]));
  }

  return Response.Send(true, res.payload, "");

  

}