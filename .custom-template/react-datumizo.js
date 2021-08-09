import React, { Component } from 'react';
import Accessor from '__Static/Accessor';

import schema from './schema';
import datalink from './datalink';
import { VStack } from '_Labizo/Stackizo';
import Datumizo from '_Labizo/Datumizo/Datumizo';
import { Box, Typography } from '@material-ui/core';
import ColorX from '__Static/ColorX';
import Authority from '__Static/Authority';

class ${1} extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "${2}",
      serverSidePagination: false, 
      base: {
        title: "${3}",
        exportDoc: "${4}",
        schema: schema,
        reqAuth: "${5}",

        columnsToolbar: true,
        filterToolbar: true,
        densityToolbar: true,
        exportToolbar: false,

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        Add: {
          title: "Add ${1}",
          url: datalink.Request.Add,
          success: "${1} Added Successfully",
          fail: "${1} Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add"
        },
        Delete: {
          title: "Delete this ${1}?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "${1} Deleted Successfully.",
          fail: "${1} Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit ${1} ",
          url: datalink.Request.Edit,
          success: "${1} Edited Successfully",
          fail: "${1} Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit"
        },
        Info: {
          title: "${1} ",
          url: datalink.Request.Info,
          success: "${1} Load Successfully",
          fail: "${1} Load Failed: ",
          schema: schema.Info,
          readOnly: true
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add ${1}", reqFunc: "Add" }],
          right: [
            { icon: "export", func: "Export", caption: "Export", reqFunc: "Export" },
            { icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
          ],
        },
      }
    };
  }

  componentDidMount(){
    Authority.Require("${5}");
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

  onMountDatumizo = (callbacks) => {
    this.MountDatumizo = callbacks;
  }

  render(){
    let {base, serverSidePagination, title} = this.state;
    return (
      <VStack>
        <Box padding={1} width="100%">
          <Typography style={{
            textAlign: "left", 
            width: "100%",
            fontSize: 25,
            color: ColorX.GetColorCSS("elainOrange")
            }}>
            {title}
          </Typography>
        </Box>
        <Datumizo
          base={base} serverSidePagination={serverSidePagination} onMounted={this.onMountDatumizo}
          />
      </VStack>
    );
  }

}

export default ${1};
