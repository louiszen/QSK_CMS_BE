import React, { Component } from "react";

import _ from "lodash";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";

import tabs from "./tabs";

import { Accessor, AuthX } from "IZOArc/STATIC";
import { VStack, HStack, Spacer } from "IZOArc/LabIZO/Stackizo";
import { Denied } from "IZOArc/Fallback";

/** 
 * Add ~react-tabs.js as tab.js in the same scope
 * tabs = [
 * {
 *   label: String,
 *   icon: String | JSX,
 *   reqAuth: String,
 *   render: JSX,
 *   iconPos: "top" | "left" | "right" | "bottom",
 *   noTransform: Boolean | false,
 *   spacing: Number | 5,
 *   alignment: "center" | "left" | "right",
 *   width: Number | 200,
 *   height: Number | 20
 * }
 * ];
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
      selectedTab: 0,
      addOns: {}
    };
  }

  componentDidMount(){
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
    let {selectedTab, addOns} = this.state;
    let renderTabs = _.isFunction(tabs)? tabs(addOns) : tabs;
    return _.map(renderTabs, (o, i) => {
      return (
        <Box key={i} hidden={selectedTab !== i} style={{width: "100%", height: "100%"}}>
          {_.isFunction(o.render)? o.render(addOns) : o.render}
        </Box>
      );
    });
  }

  renderTabPanels(){
    let {selectedTab, addOns} = this.state;
    return _.map(tabs, (o, i) => {
      return (
        <Box key={i} hidden={selectedTab !== i} style={{width: "100%", height: "100%"}}>
          {_.isFunction(o.render)? o.render(addOns) : o.render}
        </Box>
      );
    });
  }

  renderTabButtons(){
    return _.map(tabs, (o, i) => {
      if(AuthX.Pass(o.reqAuth, o.reqLevel, o.reqFunc, o.reqGroup, o.reqRole)){
        let label = _.isFunction(o.label)? o.label() : o.label;
        let icon = o.icon;
        if(o.noTransform){
          label = <Typography style={{textTransform: "none"}}>{label}</Typography>
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
          <Tab key={i} label={label} icon={icon} disabled={o.disabled} style={{minHeight: o.height || 20, minWidth: o.width || 200}}/>
        );
      }
    });
  }

  render(){
    let {selectedTab} = this.state;
    if(!AuthX.Pass("${2}")) return <Denied/>;
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