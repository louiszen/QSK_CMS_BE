import React, { Component } from 'react';

import { Box, Typography } from '@material-ui/core';

import schema from './schema';
import datalink from './datalink';

import Datumizo from '@IZOArc/LabIZO/Datumizo/Datumizo';
import { VStack } from '@IZOArc/LabIZO/Stackizo';
import { Accessor, ColorX, Authority } from '@IZOArc/STATIC';

class ${1} extends Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(){
    super();
    this.state = {
      title: "${3}",
      serverSidePagination: false, 
      base: {
        title: "${2}",
        exportDoc: "${4}",
        schema: schema,
        reqAuth: "${5}",

        columnsToolbar: true,
        filterToolbar: true,
        densityToolbar: true,
        exportToolbar: false,
        density: "standard",
        defaultPageSize: 25,
        showSelector: true,
        noDefaultTable: false,

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        Add: {
          title: "Add ${2}",
          url: datalink.Request.Add,
          success: "${2} Added Successfully",
          fail: "${2} Add Failed: ",
          schema: schema.Add,
          buttons: ["Clear", "Submit"],
          onSubmit: "Add"
        },
        Delete: {
          title: "Delete this ${2}?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.Delete,
          success: "${2} Deleted Successfully.",
          fail: "${2} Delete Failed: ",
          onSubmit: "Delete"
        },
        Edit: {
          title: "Edit ${2} ",
          url: datalink.Request.Edit,
          success: "${2} Edited Successfully",
          fail: "${2} Edit Failed: ",
          schema: schema.Edit,
          buttons: ["Revert", "Submit"],
          onSubmit: "Edit"
        },
        Info: {
          title: "${3} ",
          url: datalink.Request.Info,
          success: "${3} Load Successfully",
          fail: "${3} Load Failed: ",
          schema: schema.Info,
          readOnly: true
        },
        Import: {
          title: "${2} Import",
          content: "",
          url: datalink.Request.Import,
          success: "${2} Imported Successfully.",
          fail: "${2} Import Failed: ",
          schema: schema.ImportFormat
        },
        Export: {
          url: datalink.Request.Export,
          schema: schema.Export,
        },
        DeleteBulk: {
          title: (n) => "Delete these " + n + " ${2}?",
          content: "Caution: This is irrevertable.",
          url: datalink.Request.DeleteBulk,
          success: "${2} Deleted Successfully.",
          fail: "${2} Delete Failed: ",
          onSubmit: "DeleteBulk",
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: "Edit", reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: "Details" },
            { icon: "delete", func: "Delete", caption: "Delete", reqFunc: "Delete" },
          ],
          left: [{ icon: "add", func: "Add", caption: "Add ${2}", reqFunc: "Add" }],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => "Delete (" + n + ")", reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => "Export (" + (n === 0 ? "All" : n) + ")", reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: "Import", reqFunc: "Import" },
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
