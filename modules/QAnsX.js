const _ = require("lodash");

class QAnsX {

  static ModAns(tempObj, ansDoc, reqParams, iconDocs){
    //console.log(tempObj, ansDoc, reqParams, iconDocs);
    let rtn = {};

    let rtnDisplay = _.cloneDeep(ansDoc.display);

    //icon
    if(rtnDisplay.icon){
      let iconDoc = _.find(iconDocs, o => o.refID === rtnDisplay.icon);
      if(!iconDoc){
        throw Error("No icon find. " + rtnDisplay.icon);
      }
      rtnDisplay.icon = iconDoc.link;
    } 
    
    //params map
    let mapping = {};
    let paramFormat = {};
    let modMapping = {};
    _.map(reqParams, (o, i) => {
       let refParam = ansDoc.parameters[i];
       if(!refParam) {
         throw Error("Incorrect Ans Req Format.");
       }
       let refAns = _.find(refParam.options, v => v.EN === o);
       if(!refAns) {
         throw Error("Incorrect Parameters Format.");
       }
       mapping["#" + (i+ 1)] = refAns;  
       paramFormat["#" + (i+ 1)] = refParam.format;
    });

    modMapping = this.ModMapping(mapping, paramFormat);

    let allFields = ["title", "content", "remark", "collapse"];
    //["title", "content", "remark", "collapse"]
    _.map(allFields, (o, i) => {
      rtnDisplay[o] = {};
      if(ansDoc.display[o]){
        _.map(ansDoc.display[o], (v, x) => {
          rtnDisplay[o][x] = v.replace(/(#)[0-9]+/g, (s) => {
            if(!modMapping[s][x]){
              throw Error(s);
            }
            return modMapping[s][x];
          });
        });
      }
    });

    rtn.display = rtnDisplay;
    return rtn;
  }

  static ModMapping(mapping, paramFormat){
    let rtn = {};
    _.map(mapping, (o, i) => {
      rtn[i] = {};
      _.map(o, (v, x) => {
        if(paramFormat[i] === "Highlighted Number"){
          rtn[i][x] = v.replace(/([0-9])+/g, "<span class=\"css_bignumber\">$&</span>");
        }else if(paramFormat[i] === "Highlighted Ordered Number"){
          rtn[i][x] = v
            .replace(/([0-9])+(th|st|nd|rd|)(\*|\^|#|†|‡|∆)/g, "<span class=\"css_bignumber\">$&</span>")
            .replace(/(th|st|nd|rd|)(\*|\^|#|†|‡|∆)+/g, "<sup>$&</sup>");
        }else{
          rtn[i][x] = v;
        }
      });
    });
    
    return rtn;

  }

}

module.exports = QAnsX;