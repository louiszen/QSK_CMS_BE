import React, { Component } from 'react';

import _ from 'lodash';
import { Paper, Tab, Tabs } from '@material-ui/core';

import tabs from './tabs';

import { Accessor, Authority } from 'IZOArc/STATIC';
import { VStack } from 'IZOArc/LabIZO/Stackizo';

/** 
tabs = [
  {
    label: String,
    icon: String | JSX,
    reqAuth: String,
    render: JSX
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
        return (
          <Tab key={o.label} label={o.label} icon={o.icon} disabled={o.disabled} style={{minHeight: 20, minWidth: 200}}/>
        );
      }
    });
  }

  render(){
    let {selectedTab} = this.state;

    return (
      <VStack width="100%">
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
