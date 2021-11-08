const _base = require("$/IZOGears/_CoreWheels");

const _ = require("lodash");
const Excel = require("exceljs");

const {Chalk, Accessor} = _base.Utils;

module.exports = async (_opt, _param, _file, _res) => {
  
  let sheetName = _opt.sheetName || "Sheet1";

  console.log(Chalk.Log("[-] Generating Xlsx"));

  //const db = new MySQLDB();
  let workbook = new Excel.Workbook();
  let worksheet = workbook.addWorksheet(sheetName);
  
  let startRow = 1;
  if(!_opt.noHeader){
    _.map(_opt.schema, (o, i) => {
      worksheet.getCell(1, i+1).value = o.Header;
    });
    startRow++;
  }
  

  _.map(_opt.data, (o, i) => {
    return _.map(_opt.schema, (x, j) => {
      worksheet.getCell(i+startRow, j+1).value = Accessor.Get(o, x.accessor);
    });
  });

  await workbook.xlsx.write(_res);

  console.log(Chalk.Log("[>] sent Excel"));
  _res.end();

};