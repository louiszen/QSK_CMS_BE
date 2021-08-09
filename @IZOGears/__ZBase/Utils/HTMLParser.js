const Parser = require('htmlparser2');

const Chalk = require('./Chalk');

class HTMLParser{

  /**
   *  Parse HTML text to plain text
   * @param {String} text 
   */
  static toPlainText(text){
    let output = "";
    let error;
    let tagStack = [];
    let parser = new Parser.Parser({
      onopentag: (name, attr) => {
        tagStack.push(name)
        switch (name) {
          case 'br':
            output += '\n';
            break;
          case 'p':
          case 'tr':
            tagStack.push(name);
            break;
          default:
        }
      },
      ontext: text => {
        output += text;
      },
      onclosetag: name => {
        const lastTag = tagStack.pop();
        if (name != lastTag)
          error = "Mismatched tag " + name + " in " + text;
        switch (name) {
          case 'p':
          case 'tr':
            output += '\n';
            break;
          default:
        }
      },
    }, { decodeEntities: true });
    parser.write(text);
    parser.end();

    if(error){
      console.log(Chalk.Log("[!] HTMLParser :: " + error));
    }
    return output;
  }
}

module.exports = HTMLParser;