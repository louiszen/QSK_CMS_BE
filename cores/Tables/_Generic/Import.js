const _base = require('../../../@IZOGears/__ZBase');
const _remote = require('../../../remoteConfig');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');
const Excel = require('exceljs');

const {Chalk, Response, Accessor} = _base.Utils;

/* IMPORTANT: Generic Scripts Automation depends on FOLDER name */

/**
 * schema
 * [
 *    {
 *        accessor: 'string',
 *        format?: 'value' | 'array' | 'json',
 *        separator?: 'char'
 *    }
 * ]
 */
module.exports = async (_opt, _param, _file, _res) => {

  let replace = false;

  let rtn = {}; 
  let db = await _remote.BaseDB();
  let dbname = await _remote.GetDBName(_param.subcat);

  let schema = JSON.parse(_opt.schema);

  try{
    if(_file){
      let workbook = new Excel.Workbook();
      await workbook.xlsx.load(_file.buffer);

      let worksheet;
      let i = 0;
      while(worksheet === undefined){
        i++;
        worksheet = workbook.getWorksheet(i);
      }

      let rows = [];
      let docs = [];

      worksheet.eachRow((o, i) => {
        if(i !== 1){
          rows = [
            ...rows,
            o.values
          ]
        }
      });

      _.map(rows, (o, i) => {
        let doc = {};
        _.map(schema, (v, x) => {
          let value = o[x + 1];
          try{
            if(v.format == "array"){
              let trueValue = value && value.split(v.separator || ',');
              Accessor.Set(doc, v.accessor, trueValue);
            }else if(v.format == "json"){
              if(value){
                Accessor.Set(doc, v.accessor, JSON.parse(value));
              }
            }else{
              let trueValue = toType(value, v.format);
              Accessor.Set(doc, v.accessor, trueValue);
            }
          }catch(e){}
        });
        docs.push(doc);
      });

      if(replace){
        await db.DestroyDatabase(dbname);
        await db.CreateDatabase(dbname);
      }

      rtn = await db.UpdateBulk(dbname, docs);
      if(!rtn.Success){
        return Response.SendError(9001, rtn.payload);
      }

      return Response.Send(true, rtn, "");
    }else{
      return Response.Send(false, "No File Recieved.", "");
    }

  }catch(e){
    console.error(Chalk.CLog("[x]", e, [_param.subcat, _param.action]));
    return Response.SendError(9004, e, "");
  }

  function toType(value, format){
    if(typeof value === 'string'){
      switch(format){
        case 'string': return value;
        case 'number': return Number(value);
        case 'boolean': return (value.toLowerCase() === 'true');
        default: return value;
      }
    }else if(typeof value === 'boolean'){
      switch(format){
        case 'string': return value.toString();
        case 'number': return value ? 1: 0;
        case 'boolean': return value;
        default: return value;
      }
    }else if(typeof value === 'number'){
      switch(format){
        case 'string': return value.toString();
        case 'number': return value;
        case 'boolean': return value!==0;
        default: return value;
      }
    }else{
      return value;
    }
  }

}