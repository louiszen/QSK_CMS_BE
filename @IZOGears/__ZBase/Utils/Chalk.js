const _ = require('lodash');

const CodeMap = require('./_Parts/Chalk/CodeMap');
const GuideMenu = require('./_Parts/Chalk/GuideMenu');
const Keywords = require('./_Parts/Chalk/Keywords');
const Patterns = require('./_Parts/Chalk/Patterns');
const Mark = require('./_Parts/Chalk/Mark');
const Fill = require('./_Parts/Chalk/Fill');

const Time = require('./Time');

class Chalk{
  
  /**
   * Show the Chalk Guide
   * @param {Function} out
   */
  static Guide(out = console.log){
    this.Title("ZConsole Guide");
    GuideMenu.forEach(e => out(this.Log(e, [], false)));
    this.Break();
  }

  /**
   * Output a break line to console
   * @param {String | [String]} color 
   * @param {Function} out 
   */
  static Break(color = "Gray", out = console.log){
    out(this.Color("-------------------------------", color));
  }

  /**
   * Output a title block to console
   * @param {String} msg 
   * @param {String | [String]} color 
   * @param {String | [String]} bracketColor 
   * @param {Function} out 
   */
  static Title(msg, color = ["BrightCyan", "Bold"], bracketColor = "Green", out = console.log){
    out(this.Color("[[[", bracketColor) 
    + this.Color(" " + msg + " ", color)
    + this.Color("]]]", bracketColor));
  }

  /**
   * Return colored string with default error color
   * @param {String} msg 
   */
  static Error(msg){
    return this.Log(msg, ["Red"]);
  }

  /**
   * Return colored string
   * @param {String} msg 
   * @param {String | [String]} colorDefault 
   * @param {Boolean} showTimeStamp
   */
  static Log(msg, colorDefault = [], showTimeStamp = true){
    if(msg.includes('[-]')) colorDefault.push("Gray");
    let modTokens = [];

    //timeStamp
    if(showTimeStamp){
      modTokens.push({
        token: Time.Now().format('MMM DD-HH:mm:ss'),
        colors: "Gray",
        type: "timestamp"
      });
    }

    //Tokenize
    let tokens = msg.split(' ');

    _.map(tokens, (o, i) => {
      let res;
      res = this.KeywordTokenize(o);
      if(res) {modTokens.push(res); return; }
      res = this.PatternTokenize(o);
      if(res) {modTokens.push(res); return; }
      res = this.MarkTokenize(o);
      if(res) {modTokens.push(res); return; }
      res = this.FillTokenize(o);
      if(res) {modTokens.push(res); return; }
      
      modTokens.push({
        token: o,
        colors: colorDefault,
        type: "default"
      });
    });

    modTokens = this.FillColor(modTokens, "before");
    modTokens = modTokens.reverse();
    modTokens = this.FillColor(modTokens, "after");
    modTokens = modTokens.reverse();

    modTokens = this.GroupToken(modTokens);
    
    let rtn = [];
    _.map(modTokens, (o, i) => {
      if(!_.isEmpty(o.colors)){
        rtn.push(this.Color(o.token, o.colors));
      }else{
        rtn.push(o.token);
      }
    });

    return rtn.join(' ');
  }

  static GroupToken(tokens){
    let rtn = [];
    let token = "";
    let type = null;
    let colors = null;
    _.map(tokens, (o, i) => {
      if(!colors || !type){
        token += o.token;
        colors = o.colors;
        type = o.type;
      }else if(_.isEqual(o.colors, colors) && _.isEqual(o.type, type)){
        token += " " + o.token;
      }else{
        rtn.push({token: token, colors: colors, type: type});
        token = o.token;
        colors = o.colors;
        type = o.type;
      }
      if(i == tokens.length - 1){
        rtn.push({token: token, colors: colors, type: type});
      }
    });
    return rtn;
  }

  static FillColor(tokens, mode){
    let rtn = [];
    let fill = null;
    _.map(tokens, (o, i) => {
      if(o.type == "fill" && o.fill && o.fill.mode == mode){
        fill = o.fill;
      }

      if(fill){
        if(fill.mode == mode && fill.bound.includes(o.type)){
          fill = null;
          rtn.push(o);
        }else{
          rtn.push({
            token: o.token,
            colors: fill.colors,
            type: o.type
          });
        }
      }else{
        rtn.push(o);
      }
    });

    return rtn;
  }

  static KeywordTokenize(o){
    for(let i = 0; i<Keywords.length; i++){
      let v = Keywords[i];
      let keys = v.ci ? _.map(v.keys, x => x.toLowerCase()) : v.keys;
      let cmp = v.ci ? o.toLowerCase() : o;
      if(keys.includes(cmp)){
        return {
          token: o,
          colors: v.colors,
          type: "keyword"
        };
      }
    }
    return null;
  }

  static PatternTokenize(o){
    for(let i = 0; i<Patterns.length; i++){
      let v = Patterns[i];
      v.regex.lastIndex = 0;
      if(o.match(v.regex)){
        let token = "";
        let regexRes;
        
        while((regexRes = v.regex.exec(o)) !== null){
          token = regexRes[0];
          _.map(v.match, (x, w) => {
            let content = regexRes[x.index];
            token = token.replace(content, this.Color(content, x.colors));
          });
        }
        return {
          token: token,
          colors: [],
          type: v.type
        };
      }
    }
    return null;
  }

  static MarkTokenize(o){
    Mark.Regex.lastIndex = 0;
    if(o.match(Mark.Regex)){
      let token = "";
      let regexRes;
      
      while((regexRes = Mark.Regex.exec(o)) !== null){
        let content = regexRes[1];
        let colors = null;
        if(Mark.Map.hasOwnProperty(content)){
          colors = Mark.Map[content];
        }else{
          colors = Mark.DefaultColor;
        }

        token += this.Color("[", Mark.DefaultBracketColor) 
          + this.Color(content, colors) 
          + this.Color("]", Mark.DefaultBracketColor);
      }
      return {
        token: token,
        colors: [],
        type: "bracket"
      };
    }else{
      return null;
    }
  }

  static FillTokenize(o){

    for(let i=0; i<Fill.length; i++){
      let v = Fill[i];
      if(v.keys.includes(o)){
        return {
          token: o,
          colors: v.colors,
          type: "fill",
          fill: {
            mode: v.mode,
            bound: v.bound,
            colors: v.colors
          }
          
        }
      }
    }
    return null;
  }

  /**
   * 
   * @param {String} icon 
   * @param {String} msg 
   * @param {String | [String]} action 
   */
  static CLog(icon, msg, action){
    return this.Log(icon + "[" + action.join('/') + "] " + msg); 
  }

  /**
   * Color the message
   * @param {String} msg 
   * @param {String | [String]} colorCode 
   */
  static Color(msg, colorCode){

    let colorStack = [];
    if(!_.isArray(colorCode)) colorCode = [colorCode];

    _.map(colorCode, (o, i) => {
      if(typeof(o) == "number"){
        colorStack.push(o);
      }else if(typeof(o) == "string"){
        o = o.toLowerCase();
        if(CodeMap.hasOwnProperty(o)){
          colorStack.push(CodeMap[o]);
        }
      }
    });

    return '\u001b[' + colorStack.join(';') + 'm' + msg + '\u001b[0m';
  }
}

module.exports = Chalk;