shouldComponentUpdate(nextProps, nextState){
  if(!Accessor.IsIdentical(nextProps, this.props, Object.keys(${1}.defaultProps))){
    return true;
  }
  return false;
}