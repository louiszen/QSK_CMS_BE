const _base = require("$/IZOGears/_CoreWheels");
const _remote = require("$/remoteConfig");

const _ = require("lodash");

const {Chalk, Response, Excel, Accessor} = _base.Utils;

module.exports = async (_opt, _param, _file, _res) => {

  let rtn = {}; 
  let db = await _remote.BaseDB();

  let data = JSON.parse(_opt.data);
  let {dbname, sheet, skip, fields, newdb} = data;

  sheet = parseInt(sheet);
  skip = parseInt(skip);

  console.log(dbname, sheet, skip, fields, newdb);

  try{
    if(_file){
      let rows = await Excel.ReadToRows(sheet, _file.buffer);
      let docs = [];

      for(let x=0; x<rows.length; x++){
        if(x < skip) continue;
        let o = rows[x];
        let doc = {};
        for(let i=0; i<fields.length; i++){ 
          let v = fields[i]; 
          if(v.accessor == "") continue;
          let value = o[i+1];

          try{
            if(v.array && v.separator && value){
              let values;
              if(v.separator){
                values = value.split(v.separator);
              }

              let payload = [];
              
              for(let w of values){
                payload = [...payload, toType(w, v.type || "string")];
              }
            
              Accessor.Set(doc, v.accessor, values);
              
            }else{
              value = toType(value, v.type || "string");
              Accessor.Set(doc, v.accessor, value);
            }
            
          }catch(e){
            console.error(Chalk.CLog("[x]", e, [_param.subcat, _param.action]));
          }
        }
         
        docs = [
          ...docs,
          {
            ..._.cloneDeep(doc)
          }
        ];

      }

      if(newdb){
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
    console.log(Chalk.CLog("[x]", e, [_param.subcat, _param.action]));
    return Response.SendError(9004, e, "");
  }

  function toType(value, format){
    if(typeof value === "string"){
      switch(format){
        case "string": return value;
        case "number": return Number(value);
        case "boolean": return (value.toLowerCase() === "true");
        default: return null;
      }
    }else if(typeof value === "boolean"){
      switch(format){
        case "string": return value.toString();
        case "number": return value ? 1: 0;
        case "boolean": return value;
        default: return null;
      }
    }else if(typeof value === "number"){
      switch(format){
        case "string": return value.toString();
        case "number": return value;
        case "boolean": return value!==0;
        default: return null;
      }
    }else{
      return value;
    }
  }
};