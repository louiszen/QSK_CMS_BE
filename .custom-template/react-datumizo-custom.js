import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Accessor } from 'IZOArc/STATIC';
import PropsType from 'prop-types';
import { HStack, VStack } from 'IZOArc/LabIZO/Stackizo';
import _ from 'lodash';

/**
 * @augments {Component<Props, State>}
 */
class ${1} extends Component {

  static propTypes = {
    docID: PropsType.string,
    doc: PropsType.object,
    onQuit: PropsType.func,
    onQuitRefresh: PropsType.func,
    renderFormizo: PropsType.func,
    addOns: PropsType.object
  }

  static defaultProps = {
    docID: null,
    doc: null,
    onQuit: null,
    onQuitRefresh: null,
    renderFormizo: null,
    addOns: null
  }

  constructor(){
    super();
    this.state = {};
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

  render(){
    let {docID} = this.props;
    return (
      <VStack>
        <HStack>
          {docID}
        </HStack>
      </VStack>
    );
  }

}

export default observer(${1});
