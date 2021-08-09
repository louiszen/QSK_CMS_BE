const _ = require('lodash');

/**
 * Class for converting Chinese Number to Numeric data
 */
class ChineseNumber {

  /**
   * usage: new ChineseNumber("一萬", false);
   * @param {String} str 
   * @param {Boolean} time 
   */
  constructor(str, time = false){
    this.input = str;
    this.Match = {
      Digits: {
        '零': 0, '〇': 0, '０': 0, 
        '壹': 1, '一': 1, '１': 1,
        '二': 2, '两': 2,
        '兩': 2, '倆': 2, '俩': 2, '２': 2,
        '三': 3, '仨': 3, '３': 3,
        '四': 4, '４': 4,
        '五': 5, '５': 5,
        '六': 6, '６': 6,
        '七': 7, '７': 7,
        '八': 8, '８': 8,
        '九': 9, '９': 9
      },
      Units: time? {
        '十': 10, '拾': 10,
        '廿': 20
      } : {
        '十': 10, '拾': 10,
        '廿': 20, '卅': 30,
        '卌': 40, '皕': 200,
        '百': 100, '佰': 100,
        '仟': 1000, '千': 1000,
        '萬': 10000, '万': 10000,
        '億': 100000000, '亿': 100000000,
        '兆': 1000000000000
      },
      Steps: time? {
        '十': 10
      } : {
        '十': 10, 
        '百': 100, 
        '千': 1000,
        '萬': 10000,
        '億': 100000000,
        '兆': 1000000000000
      }
    }
    this.Reverse = this.ReverseSteps();
    this.RRegex = this.RecursiveRegex();
    this.NRegex = this.NumberRegex();

    let nospace = str.replace(/[,\s]/g, '');
    this.Modified = time? nospace : this.AddMissingUnit(nospace);
  }

  ReverseSteps(){
    let rtn = {};
    _.map(this.Match.Steps, (o, i) => {
      rtn[o] = i;
    });
    return rtn;
  }

  RecursiveRegex(){
    return new RegExp("([" + this.Digits().join("") + "]|\\d*)([" + this.Units().join("") + "])");
  }

  NumberRegex(){
    return new RegExp('(?![0]+)(?:(?:\\d+(?:[.,\\s]\\d+)*)*)(?:[\\d' + this.Units().join("") + this.Digits().join("") + ']+)', 'g');
  }

  Digits(){
    return Object.keys(this.Match.Digits);
  }

  IsDigit(c){
    return isNaN(c) ? this.Digits().includes(c) : true;
  }

  GetDigit(c){
    return this.Match.Digits[c];
  }

  Units(){
    return Object.keys(this.Match.Units);
  }

  IsUnit(c){
    return this.Units().includes(c);
  }

  GetUnit(c){
    return this.Match.Units[c];
  }

  /**
   * 
   * @param {String} str 
   */
  toNumber(str = this.Modified){
    let rtn = 0;
    let regexRes;
    this.RRegex.lastIndex = 0;
    let stayV = 0;
    let prevUnitV = null;
    
    while((regexRes = this.RRegex.exec(str)) != null){
      let digit = regexRes[1];
      let unit = regexRes[2];

      let digitV = (!prevUnitV && !digit)? 1 :
        ((isNaN(digit) ? this.GetDigit(digit) : parseInt(digit)));
      let unitV = this.GetUnit(unit);

      if(prevUnitV && prevUnitV < unitV){
        rtn += stayV * unitV;
        stayV = 0;
        prevUnitV = null;
      }else{
        stayV += digitV * unitV;
        prevUnitV = unitV;
      }

      str = str.replace(regexRes[0], "");
    }

    rtn += stayV;
    if(!_.isEmpty(str)){
      rtn += isNaN(str) ? this.GetDigit(str) : parseInt(str);
    }
    
    return rtn;
  }

  /**
   * Min number of consecutive characters for converting
   * @param {Number} minNum 
   * @param {String} str 
   */
  toArabicStr(minNum = 2, str = this.Modified){
    let rtn = str;
    this.NRegex.lastIndex = 0;
    rtn = rtn.replace(this.NRegex, m => {
      if(m.length >= minNum){
        return this.toNumber(m);
      }else{
        return m;
      }
    });
    return rtn;
  }

  Extract(minNum = 1, str = this.Modified){
    let rtn = [];
    let regexRes;
    this.NRegex.lastIndex = 0;
    while((regexRes = this.NRegex.exec(str)) != null){
      if(regexRes[0].length >= minNum){
        rtn.push(this.toNumber(regexRes[0]));
      }
    }

    return rtn;
  }

  AddMissingUnit(str){
    let rtn = "";
    let chars = str.split('');
    for(let i = 0; i< chars.length; i++){
      let c = chars[i];
      let _c = chars[i - 1] || undefined;
      let c_ = chars[i + 1] || undefined;

      if(i === 0 || !this.IsDigit(c) || !this.IsUnit(_c)){
        rtn += c;
      }else{
        let prevUnit = this.GetUnit(_c);
        if(c_ === undefined){
          rtn += c + (this.Reverse[prevUnit / 10] || "");
        }else{
          let nextUnit = this.GetUnit(c_);
          if(nextUnit > prevUnit){
            rtn += c + (this.Reverse[prevUnit / 10] || "");
          }else{
            rtn += c;
          }
        }
      }
    }
    return rtn;
  }
}

module.exports = ChineseNumber;