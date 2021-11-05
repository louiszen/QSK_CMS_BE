const _base = require('$/IZOGears/__ZBase');

const path = require('path');
const catName = path.basename(__dirname);
const actName = path.basename(__filename, path.extname(__filename));

const _ = require('lodash');
const tempfile = require('tempfile');
const Excel = require('exceljs');

const {Chalk, Accessor} = _base.Utils;

module.exports = async (_opt, _param, _file, _res) => {
  
  let sheetName = _opt.sheetName || "Sheet1";

  console.log(Chalk.Log('[-] Generating Xlsx'));

  //const db = new MySQLDB();
  let workbook = new Excel.Workbook();
  let worksheet = workbook.addWorksheet(sheetName);
  tempPath = tempfile('.xlsx');
  
  let startRow = 1;
  if(_opt.noHeader){
    
  }else{
    _.map(_opt.schema, (o, i) => {
      worksheet.getCell(1, i+1).value = o.Header;
    });
    startRow++;
  }
  

  _.map(_opt.data, (o, i) => {
    return _.map(_opt.schema, (x, j) => {
      worksheet.getCell(i+startRow, j+1).value = Accessor.Get(o, x.accessor)
    });
  });

  let rtn = await workbook.xlsx.write(_res);

  console.log(Chalk.Log("[>] sent Excel"));
  _res.end();

}