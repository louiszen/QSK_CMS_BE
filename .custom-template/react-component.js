import React, { Component } from 'react';
import { Accessor, Authority } from 'IZOArc/STATIC';
import PropsType from 'prop-types';

import { Denied } from 'IZOArc/Fallback';

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
    if(!Authority.IsAccessibleQ("${2}")) return <Denied/>;
    return (
      <div>

      </div>
    );
  }

}

export default ${1};
