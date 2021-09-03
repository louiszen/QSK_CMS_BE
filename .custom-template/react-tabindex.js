import React, { Component } from 'react';

import _ from 'lodash';
import { Paper, Tab, Tabs, Typography } from '@material-ui/core';

import tabs from './tabs';

import { Accessor, Authority } from 'IZOArc/STATIC';
import { VStack, HStack, Spacer } from 'IZOArc/LabIZO/Stackizo';

/** 
tabs = [
  {
    label: String,
    icon: String | JSX,
    reqAuth: String,
    render: JSX,
    iconPos: "top" | "left" | "right" | "bottom",
    noTransform: Boolean | false,
    spacing: Number | 5,
    alignment: "center" | "left" | "right"
  }
];
*/

/**
 * @augments {Component<Props, State>}
 */
class ${1} extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      selectedTab: 0
    };
  }

  componentDidMount(){
    Authority.Require("${2}");
    this._setAllStates();
  }

  componentDidUpdate(prevProps, prevState){
    if(!Accessor.IsIdentical(prevProps, this.props, Object.keys(${1}.defaultProps))){
      this._setAllStates();
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  _setAllStates = (callback) => {
    this.setState((state, props) => ({
      ...props,
    }), callback);
  }

  onChangeTab = (e, tab) => {
    this.setState({
      selectedTab: tab
    });
  }

  renderTabPanels(){
    let {selectedTab} = this.state;
    return _.map(tabs, (o, i) => {
      return (
        <div key={i} hidden={selectedTab !== i} style={{width: "100%", height: "100%"}}>
          {o.render}
        </div>
      );
    });
  }

  renderTabButtons(){
    return _.map(tabs, (o, i) => {
      if(Authority.IsAccessibleQ(o.reqAuth, o.reqLevel, o.reqFunc)){
        let label = o.label;
        let icon = o.icon;
        if(o.noTransform){
          label = <Typography style={{textTransform: 'none'}}>{o.label}</Typography>
        }
        switch(o.iconPos){
          case "top": default: 
            break;
          case "bottom":
            label = <VStack spacing={o.spacing || 5}>{label}{icon}</VStack>; 
            icon = null; break;
          case "left": 
            label = <HStack spacing={o.spacing || 5}>
              {o.alignment === "right" && <Spacer/>}
              {icon}{label}
              {o.alignment === "left" && <Spacer/>}
              </HStack>; 
            icon = null; break;
          case "right":
            label = <HStack spacing={o.spacing || 5}>
              {o.alignment === "right" && <Spacer/>}
              {label}{icon}
              {o.alignment === "left" && <Spacer/>}
              </HStack>; 
            icon = null; break;
        }
        return (
          <Tab key={i} label={label} icon={icon} disabled={o.disabled} style={{minHeight: 20, minWidth: 200}}/>
        );
      }
    });
  }

  render(){
    let {selectedTab} = this.state;

    return (
      <VStack width="100%" height="100%">
        <Paper position="static" style={{width: "100%"}}>
          <Tabs value={selectedTab} 
            indicatorColor="primary"
            textColor="primary"
            onChange={this.onChangeTab} 
            style={{backgroundColor: "aliceblue", color: "blue", minHeight: 20}}
            variant="scrollable"
            scrollButtons="auto"
            >
            {this.renderTabButtons()}
          </Tabs>
        </Paper>
        <Paper style={{width: "100%", height: "100%", background: "transparent", padding: "5px"}}>
          {this.renderTabPanels()}
        </Paper> 
      </VStack>
    );
  }

}

export default ${1};
