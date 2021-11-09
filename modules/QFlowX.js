const _base = require("$/IZOGears/_CoreWheels");

const _ = require("lodash");
const EffectiveDocsX = require("$/IZOGears/COGS/Queries/EffectiveDocsX");

const {Chalk} = _base.Utils;

class QFlowX {

  static async getAllFlow(arrivalDate){
    let res = await EffectiveDocsX.GetByRefID("QFlow", "Flow", arrivalDate);
    if(!res.Success){
      let msg = res.message;
      console.log(Chalk.CLog("[!]", msg, [this.name]));
      throw new Error(msg);
    }

    return res.payload.doc.flow;
  }

  static async GetBySeverity(severity, arrivalDate){

    let flow = await this.getAllFlow(arrivalDate);
    //Find start node
    let rtn = [];

    let workingNode = [];
    let startNode = _.find(flow, o => o.type === "Tube_Src" && o.data.severity === severity);

    workingNode.push(startNode);

    while(!_.isEmpty(workingNode)){
      let popNode = workingNode.pop();
      //find edge connecting
      let connectingEdge = _.filter(flow, o => o.source === popNode.id);
      switch(popNode.type){
        case "Tube_Src": //startNode
          if(connectingEdge.length !== 1){
            let msg = "Flow structure error: not closed flow.";
            console.log(Chalk.CLog("[x]", msg, [this.name])); 
            throw Error(msg);
          }
          _.map(connectingEdge, (o, i) => {
            popNode.next = o.target;
            let targetNode = _.find(flow, v => v.id === o.target);
            workingNode.push(targetNode);
          });
          break;
        case "Rect_YesNo": //qNode
          if(connectingEdge.length !== 2){
            let msg = "Flow structure error: not closed flow.";
            console.log(Chalk.CLog("[x]", msg, [this.name])); 
            throw Error(msg);
          }

          _.map(connectingEdge, (o, i) => {
            popNode[o.sourceHandle] = o.target;
            let targetNode = _.find(flow, v => v.id === o.target);
            workingNode.push(targetNode);
          });
          break;

        case "Tube_End": //endNode
          if(connectingEdge.length !== 0){
            let msg = "Flow structure error: not closed flow.";
            console.log(Chalk.CLog("[x]", msg, [this.name])); 
            throw Error(msg);
          }
          break;
        default: {
          let msg = "Flow structure error: not a valid node!";
          console.log(Chalk.CLog("[x]", msg, [this.name])); 
          throw Error(msg);
        }
      }

      if(popNode.position) delete popNode.position;
      rtn.push(popNode);
    }
    return rtn;

  }

  static AllQuestions(flow){
    //filter out _QHKR
    let rtn = [];
    for(let i=0; i<flow.length; i++){
      let o = flow[i];
      if(o.type === "Rect_YesNo"){
        if(!o.data || !o.data.selected){
          let msg = "Flow structure error: incorrect data.";
          console.log(Chalk.CLog("[x]", msg, [this.name])); 
          throw Error(msg);
        }
        if(o.data.selected !== "_QHKR"){
          rtn.push(o.data.selected);
        }
      }
    }
    rtn = _.uniq(rtn);
    return rtn;
  }

  static AllAnswers(flow){
    let rtn = [];
    for(let i=0; i<flow.length; i++){
      let o = flow[i];
      if(o.type === "Tube_End"){
        if(!o.data || !o.data.selected){
          let msg = "Flow structure error: incorrect data.";
          console.log(Chalk.CLog("[x]", msg, [this.name])); 
          throw Error(msg);
        }
        rtn.push(o.data.selected);
      }
    }
    rtn = _.uniq(rtn);
    return rtn;
  }

  static GetAnswer(flow, params){
    let sevNode = _.find(flow, o => o.type === "Tube_Src");
    let firstNodeID = sevNode.next;
    let firstNode = _.find(flow, o => o.id === firstNodeID);

    let currNode = firstNode;
    while(currNode.type === "Rect_YesNo"){
      let qID = currNode.data?.selected;
      if(!qID){
        let msg = "Flow structure error: incorrect data.";
        console.log(Chalk.CLog("[x]", msg, [this.name])); 
        throw Error(msg);
      }
      let ans = params[qID];
      let nextID = ans === true? currNode.yes : currNode.no;
      currNode = _.find(flow, o => o.id === nextID);
      if(!currNode){
        let msg = "Flow structure error: incorrect data.";
        console.log(Chalk.CLog("[x]", msg, [this.name])); 
        throw Error(msg);
      }
    }
    if(currNode.type !== "Tube_End"){
      let msg = "Flow structure error: incorrect data.";
      console.log(Chalk.CLog("[x]", msg, [this.name])); 
      throw Error(msg);
    }

    return currNode.data.selected;
  }

  static GetQPassed(flow, params){
    let rtn = [];
    let sevNode = _.find(flow, o => o.type === "Tube_Src");
    let firstNodeID = sevNode.next;
    let firstNode = _.find(flow, o => o.id === firstNodeID);

    let currNode = firstNode;
    while(currNode.type === "Rect_YesNo"){
      
      let qID = currNode.data?.selected;
      if(!qID){
        let msg = "Flow structure error: incorrect data.";
        console.log(Chalk.CLog("[x]", msg, [this.name])); 
        throw Error(msg);
      }
      rtn.push(qID);
      let ans = params[qID];
      let nextID = ans === true? currNode.yes : currNode.no;
      currNode = _.find(flow, o => o.id === nextID);
      if(!currNode){
        let msg = "Flow structure error: incorrect data.";
        console.log(Chalk.CLog("[x]", msg, [this.name])); 
        throw Error(msg);
      }
    }
    if(currNode.type !== "Tube_End"){
      let msg = "Flow structure error: incorrect data.";
      console.log(Chalk.CLog("[x]", msg, [this.name])); 
      throw Error(msg);
    }

    return rtn;
  }

}

module.exports = QFlowX;