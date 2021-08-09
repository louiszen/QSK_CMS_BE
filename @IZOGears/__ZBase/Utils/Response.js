const _ = require("lodash");

class Response {

  /**
   * Send Formatted Response
   * @param {Boolean} success 
   * @param {*} payload 
   * @param {String} message 
   */
  static Send(success, payload = {}, message = ""){
    return{
      Success: success,
      payload: payload,
      message: message
    }
  }

  /**
   * Send Formatted Error Response
   * @param {Number} errorCode 
   * @param {Error | String} error 
   */
  static SendError(errorCode, error){
    if(_.isString(error)){
      return{
        payload: {
          errorCode: errorCode,
          message: error,
          name: error,
          stack: error
        },
        Success: false
      }
    }
    if(_.isArray(error)){
      return{
        payload: {
          errorCode: errorCode,
          message: error.join('\n'),
          name: error.join('\n'),
          stack: error.join('\n'),
        },
        Success: false
      }
    }
    return{
      payload: {
        errorCode: errorCode,
        message: error.message,
        name: error.name,
        stack: error.stack
      },
      Success: false
    }
  }

  /**
   * Send Formatted Error SQL Response
   * @param {String} message 
   * @param {Number} errorCode 
   * @param {String} sql 
   * @param {*} payload 
   */
  static SendSQLError(message, errorCode, sql, payload = null){
    return{
      message: message,
      error: errorCode,
      sql: sql,
      payload: payload
    }
  }

}

module.exports = Response;