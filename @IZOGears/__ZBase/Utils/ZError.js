/**
 * @experimental
 */
class ZError {
  
  constructor(code, message, e){
    this.code = code;
    this.message = message;
    this.GetType();
    Error.captureStackTrace(this);
  }

  GetType(){
    //Pending
    let typeCode = Math.floor(this.code / 100);
    this.type = "";
    switch(typeCode){
      case 1: this.type = ""; return;
      case 2: this.type = ""; return;
      case 3: this.type = ""; return;
    }
  }
}

module.exports = ZError;