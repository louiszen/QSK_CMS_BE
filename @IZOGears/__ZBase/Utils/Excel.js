const _ = require('lodash');
const ExcelJS = require('exceljs');

const Chalk = require('./Chalk');
const Accessor = require('./Accessor');
const { parseInt } = require('lodash');
const Time = require('./Time');

class Excel{

  /**
   * 
   * @param {ExcelJS.Worksheet} worksheet 
   */
  static FitWorksheet(worksheet){
    _.map(worksheet.columns, (o, i) => {
      var maxLength = 0;
      o["eachCell"]({ includeEmpty: true }, (c) => {
        let columnLength = c.value ? c.value.toString().length + 8: 10;
        if (columnLength > maxLength ) {
            maxLength = columnLength;
        }
        c.alignment = { 
          wrapText: true 
        };
      });
      o.width = Math.min(Math.max(10, maxLength), 200);
    });
  }

  static FontColors = {
    Green: 'FF558826',
    Red: 'FFA30108',
    Yellow: 'FF9D5816',
    Blue: 'FF4A6288',
    Purple: 'FFAB54D3',
    Grey: 'FF505050',
    Orange: 'FFD47800',
    Default: 'FF000000'
  }

  /**
   * 
   * @param {String} color 
   * @param {String} name 
   * @param {Boolean} bold 
   */
  static FontO(color = "Default", name = "Arial", bold = true) {
    if(this.FontColors[color]){
      return {
        name: name,
        bold: bold,
        color: {argb: this.FontColors[color]}
      }
    }else{
      return {
        name: name,
        bold: bold,
        color: {argb: color}
      }
    }
  }

  static FillColors = {
    Green: 'FFC6EFCE',
    Red: 'FFFFC7CE', 
    Yellow: 'FFFFEB9C',
    Blue: 'FF9BC2E6',
    Purple: 'FFFAC6FF', 
    Grey: 'FFC5C5C5',
    Orange: 'FFFFC48D',
    Default: 'FFFFFFFF'
  };

  /**
   * 
   * @param {String} color 
   */
  static FillO(color = "Default") {
    if(this.FillColors[color]){
      return {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: this.FillColors[color]}
      }
    }else{
      return {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: color}
      }
    }
  }

  /**
   * See also: Exceljs.Workbook.getWorksheet.eachRow
   * @param {Number | String} sheet 
   * @param {Buffer} fileBuffer 
   * 
   */
  static async ReadToRows(sheet, fileBuffer){
    let workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(fileBuffer);

    let worksheet = workbook.getWorksheet(sheet);

    if(worksheet){
      let rows = [];
      worksheet.eachRow((o, i) => {
        rows = [
          ...rows,
          o.values
        ];
      });
      return rows;
    }else{
      console.error(Chalk.Log("[x] Excel :: Cannot get Worksheet."));
      return null;
    }
  }

  /**
   * 
   * @param {Buffer} fileBuffer 
   * @param {[{
   *  label?: String,
   *  name: String,
   *  format?: 'value' | 'key',
   *  array?: [*]
   * }]} schema 
   * @param {String} sheetName 
   * @param {Boolean} noHeader 
   * 
   * @returns {[*]}
   */
  static async Excel2Docs(fileBuffer, schema, sheetName = "Sheet1", noHeader = false){
    let workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(fileBuffer);

    let worksheet = workbook.getWorksheet(sheetName);
    let docs = [];

    let mSchema = [];
    this.ModSchema(mSchema, "", schema, 0, 1);

    if(worksheet){
      let colValue = {};
      let doc = {};
      worksheet.eachRow((o, i) => {
        if(!noHeader && i == 1) return; 
        _.map(mSchema, (v, x) => {
          let value;
          if(v.col == 1){
            let cell = o.getCell(v.col).value;
            if(!_.isEmpty(cell) && !_.isEmpty(doc)){
              docs.push(doc);
              doc = {};
            }
          }else if(v.startArray){
            let cell = o.getCell(v.col).value;
            if(!_.isEmpty(cell)){
              if(v.key){
                value = cell.trim();
                colValue[v.col] = value;
                _.map(colValue, (cv, c) => {
                  if(c > v.col){
                    delete colValue[c];
                  }
                })
              }else{
                if(_.isNumber(colValue[v.col])){
                  value = colValue[v.col] + 1;
                }else if( _.isEmpty(colValue[v.col]) && colValue[v.col] !== 0){
                  value = 0;
                }else{
                  value = colValue[v.col] + 1;
                }

                colValue[v.col] = value;
              }
            }else{
              if(v.key){
                value = colValue[v.col];
              }else{
                if( _.isEmpty(colValue[v.col]) && colValue[v.col] !== 0){
                  value = 0;
                }
                colValue[v.col] = value;
              }
            }
          }
          
          //fill value
          if(v.key){
            return;
          }
          
          let iname = v.name;
          let splits = iname.split('.');
          
          let snames = [];
          _.map(splits, (s, k) => {
            if(s.startsWith('*')){
              let col = parseInt(s.replace('*', ''));
              s = colValue[col];  
            }
            snames.push(s);
          });

          iname = snames.join('.');
          let ivalue = o.getCell(v.col).value;
          if(ivalue && v.format){
            ivalue = this.toType(ivalue, v.format);
            if(Time.IsMoment(ivalue) 
              && v.dateMod 
              && (v.format === "date" || v.format === "datetime")){
              switch (v.dateMod){
                case "startOfDay": ivalue = Time.StartOfDay(ivalue); break;
                case "endOfDay": ivalue = Time.EndOfDay(ivalue); break;
              }
            }
          }
        
          if(!_.isUndefined(ivalue) && !_.isNull(ivalue) && !(_.isString(ivalue) && _.isEmpty(ivalue))){
            Accessor.Set(doc, iname, typeof(ivalue) == "string"? ivalue.trim() : ivalue);
          }

        });
      });

      if(!_.isEmpty(doc)){
        docs.push(doc);
      }

      console.log(docs);
      return docs;
      
    }else{
      console.error(Chalk.Log("[x] Excel :: Cannot get Worksheet."));
      return null;
    }
  }

  static ModSchema(mod, name, schema, level, startCol){
    let col = startCol;
    _.map(schema, (o, i) => {
      let iname = "";
      if(_.isEmpty(name)){
        iname = o.name;
      }else{
        iname = name + (_.isEmpty(o.name)? "" : "." + o.name);
      }
      if(o.array && o.array.length > 0){
        iname += ".*" + col;
        col = this.ModSchema(mod, iname, o.array, level + 1, col);
      }else{
        this.ModSchemaValue(mod, col, iname, level, o.type, i, o);
        col++;
      }
    });
    return col;
  }

  static ModSchemaValue(mod, col, name, level, type, idx, ischema){
    mod.push({
      ...ischema,
      col: col, 
      name: name, 
      level: level,
      key: type == "key",
      startArray: idx == 0
    });
  }

  /**
   * 
   * @param {[*]} data 
   * @param {[{
   *  label?: String,
   *  name: String,
   *  format?: 'value' | 'key',
   *  array?: [*]
   * }]} schema 
   * @param {String} sheetName
   * @param {Boolean} noHeader
   * 
   * @returns {ExcelJS.Workbook}
   */
  static Docs2Excel(data, schema, sheetName = "Sheet1", noHeader = false){
    let workbook = new ExcelJS.Workbook();
    let worksheet = workbook.addWorksheet(sheetName);

    let _row = 1;
    if(!noHeader){

      let _col = 1;
      _.map(schema, (o, i) => {
        if(o.array){
          _col = this.FillArrayHeader(worksheet, _col, o.array);
        }else{
          _col = this.FillHeader(worksheet, _col, o.label);
        }
      });
      _row++;
    }

    let _col = 1;
    this.FillArray(worksheet, _row, _col, data, "",  schema);
    this.FitWorksheet(worksheet);

    return workbook;
  }

  static FillArrayHeader(worksheet, col, ischema){
    _.map(ischema, (o, i) => {
      if(o.array){
        col = this.FillArrayHeader(worksheet, col, o.array);
      }else{
        col = this.FillHeader(worksheet, col, o.label);
      }
    });
    return col;
  }

  static FillHeader(worksheet, col, label){
    worksheet.getCell(1, col).value = label;
    worksheet.getCell(1, col).font = {bold: true};
    return col + 1;
  }

  static FillArray(worksheet, startRow, startCol, doc, name, ischema){
    
    let data = _.isEmpty(name)? doc : Accessor.Get(doc, name);
    let row = startRow;
    let dataStartRow = startRow;
    let col = startCol;
    let max = startRow;

    if (_.isEmpty(data)){
      col = startCol;
      _.map(ischema, (x, j) => {
        row = dataStartRow;
        if(x.array){
          let rtn = this.FillArray(worksheet, row, col, null, x.name, x.array);
          col = rtn._col;
          row = rtn._row;
          max = row > max ? row : max;
        }else{
          switch(x.type){
            case "value": default: 
              col = this.FillValue(worksheet, row, col, null, x);
            break;
            case "key": 
              col = this.FillKey(worksheet, row, col, i);
            break;
          }
        }
      });

      row = max + 1;
      max = row > max ? row : max;
      dataStartRow = row;
    }else{

      _.map(data, (o, i) => {
        col = startCol;
        _.map(ischema, (x, j) => {
          row = dataStartRow;
          if(x.array){
            let rtn = this.FillArray(worksheet, row, col, o, x.name, x.array);
            col = rtn._col;
            row = rtn._row;
            max = row > max ? row : max;
          }else{
            switch(x.type){
              case "value": default: 
                col = this.FillValue(worksheet, row, col, o, x);
              break;
              case "key": 
                col = this.FillKey(worksheet, row, col, i);
              break;
            }
          }
        });

        row = max + 1;
        max = row > max ? row : max;
        dataStartRow = row;
      });
    }

    return {
      _col: col,
      _row: max - 1
    }
  }

  static FillValue(worksheet, row, col, doc, xschema){
    let name = xschema.name;
    let value = _.isEmpty(name)? doc : Accessor.Get(doc, name);

    value = this.toType(value, xschema.format, xschema.dateFormat);
    worksheet.getCell(row, col).value = value;
    return col + 1;
  }

  static FillKey(worksheet, row, col, key){
    worksheet.getCell(row, col).value = key;
    return col + 1;
  }

  static toType(value, format = "string", dateFormat){
    console.log(value, format, dateFormat, Time.IsMoment(value), typeof(value));
    if(value && Time.IsMoment(value)){
      switch(format){
        case 'string': return value;
        case 'number': return Number(value);
        case 'boolean': return (value.toLowerCase() === 'true');
        case "date": return value.local().format(dateFormat || "YYYY/MM/DD");
        case "datetime": return value.local().format(dateFormat || "YYYY/MM/DD HH:mm:ss");
        default: return value;
      }
    }else if(typeof value === 'string'){
      switch(format){
        case 'string': return value;
        case 'number': return Number(value);
        case 'boolean': return (value.toLowerCase() === 'true');
        case "date": return Time.Parse(value, (dateFormat || "YYYY/MM/DD")).local().format(dateFormat || "YYYY/MM/DD"); 
        case "datetime": return Time.Parse(value, (dateFormat || "YYYY/MM/DD")).local().format(dateFormat || "YYYY/MM/DD HH:mm:ss"); 
        case "json": try { return JSON.parse(value); } catch { throw new Error("Invalid JSON format: " + value); }
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
    }else if(typeof value === 'object' && (format === 'date' || format === 'datetime')){
      switch(format){
        case "date": return Time.Parse(value).local().format(dateFormat || "YYYY/MM/DD"); 
        case "datetime": return Time.Parse(value).local().format(dateFormat || "YYYY/MM/DD HH:mm:ss"); 
        default: return value;
      }
    }else{
      return value;
    }
  }
}

module.exports = Excel;