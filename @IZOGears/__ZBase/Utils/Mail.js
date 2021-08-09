const mailer = require('nodemailer');

const Chalk = require('./Chalk');

class Mail {

  /**
   * 
   * @param {String} title 
   * @param {String} message 
   * @param {{
   *  SENDER: String,
   *  RECEIVERS: String | [String],
   *  PASSWORD: String
   * }} settings 
   */
  static async sendAlertMail(title, message, settings){
    let transporter = mailer.createTransport({
      service: 'Gmail',
      auth: {
        user: settings.SENDER,
        pass: settings.PASSWORD
      }
    })  
  
    try {
      await transporter.sendMail({
        from: settings.SENDER,
        to: settings.RECEIVERS,
        subject: title || message,
        html: message
      })
      return {Success: true};
      
    }catch(e){
      let msg = "[x] Mail :: Cannot send alert mail";
      console.error(Chalk.Log(msg));
      return {Success: false, payload: {Message: msg, Error: e}};
    }
  }

}

module.exports = Mail; 

