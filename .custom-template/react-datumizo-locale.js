import React, { Component } from "react";
import PropsType from "prop-types";
import { observer } from "mobx-react";

import _ from "lodash";
import { Box, Typography } from "@mui/material";

import schema from "./schema";
import datalink from "./datalink";

import Datumizo from "IZOArc/LabIZO/Datumizo/Datumizo";
import { VStack } from "IZOArc/LabIZO/Stackizo";
import { Accessor, ColorX, Authority, STORE, LocaleX } from "IZOArc/STATIC";
import { IZOTheme } from "__SYSDefault/Theme";
import { Denied } from "IZOArc/Fallback";

/**
 * add ~react-datalink.js as datalink.js in the same scope
 * add ~react-schema.js as schema.js in the same scope
 * @augments {Component<Props, State>}
 */
class ${1} extends Component {

  static propTypes = {
    addOns: PropsType.object,
    onDataChange: PropsType.func
  }

  static defaultProps = {
    addOns: {},
    onDataChange: undefined
  }

  constructor(){
    super();
    this.state = {
      title: () => LocaleX.Get("${2}.PageTitle"),
      serverSidePagination: false, 
      base: {
        title: () => LocaleX.Get("${2}.Title"),
        exportDoc: "${3}",
        rowIdAccessor: "_id",
        schema: schema,
        reqAuth: "${4}",

        noDefaultTable: false,
        noDefaultButtons: false,
        refreshButton: "none",
        usePropsData: false,
        timeRanged: "none",

        tablizo: {
          columnsToolbar: true,
          filterToolbar: true,
          densityToolbar: true,
          exportToolbar: false,
          density: "compact", //compact, standard, comfortable
          defaultPageSize: 50,
          showSelector: true,
        },

        formizo: {
          width: 700
        },

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        operations: {
          Add: {
            title: () => LocaleX.Get("${2}.Add.title"),
            url: datalink.Request.Add,
            success:  () => LocaleX.Get("${2}.Add.success"),
            fail:  () => LocaleX.Get("${2}.Add.fail"),
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: () => LocaleX.Get("${2}.Delete.title"),
            content: () => LocaleX.Get("${2}.Delete.content"),
            url: datalink.Request.Delete,
            success: () => LocaleX.Get("${2}.Delete.success"),
            fail: () => LocaleX.Get("${2}.Delete.fail"),
            onSubmit: "Delete"
          },
          Edit: {
            title: () => LocaleX.Get("${2}.Edit.title"),
            url: datalink.Request.Edit,
            success: () => LocaleX.Get("${2}.Edit.success"),
            fail: () => LocaleX.Get("${2}.Edit.fail"),
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: () => LocaleX.Get("${2}.Info.title"),
            url: datalink.Request.Info,
            success: () => LocaleX.Get("${2}.Info.success"),
            fail: () => LocaleX.Get("${2}.Info.fail"),
            schema: schema.Info,
            readOnly: true
          },
          Duplicate: { //direct duplicate, for to Add, plz use func: "DuplicateAdd"
            title: () => LocaleX.Get("${2}.Duplicate.title"),
            url: datalink.Request.Duplicate,
            success: () => LocaleX.Get("${2}.Duplicate.success"),
            fail: () => LocaleX.Get("${2}.Duplicate.fail"),
            onSubmit: "Duplicate"
          },
          Import: {
            title: () => LocaleX.Get("${2}.Import.title"),
            content: "",
            url: datalink.Request.Import,
            success: () => LocaleX.Get("${2}.Import.success"),
            fail: () => LocaleX.Get("${2}.Import.fail"),
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => LocaleX.Get("${2}.DeleteBulk.title", {n: n}),
            content: () => LocaleX.Get("${2}.DeleteBulk.content"),
            url: datalink.Request.DeleteBulk,
            success: () => LocaleX.Get("${2}.DeleteBulk.success"),
            fail: () => LocaleX.Get("${2}.DeleteBulk.fail"),
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", caption: () => LocaleX.Get("${2}.ButtonCaption.Edit"), reqFunc: "Edit" },
            { icon: "info", func: "Info", caption: () => LocaleX.Get("${2}.ButtonCaption.Info") },
            { icon: "delete", func: "Delete", caption: () => LocaleX.Get("${2}.ButtonCaption.Delete"), reqFunc: "Delete" },
            //{ icon: "duplicate", func: "Duplicate", caption: () => LocaleX.Get("${2}.ButtonCaption.Duplicate"), reqFunc: "Duplicate" },
            //{ icon: "duplicate", func: "DuplicateAdd", caption: () => LocaleX.Get("${2}.ButtonCaption.Duplicate"), reqFunc: "Duplicate" },
          ],
          left: [
            { icon: "add", func: "Add", caption: () => LocaleX.Get("${2}.ButtonCaption.Add"), reqFunc: "Add" }
          ],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", caption: (n) => LocaleX.Get("${2}.ButtonCaption.DeleteBulk", {n: n}), reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", caption: (n) => LocaleX.Get("${2}.ButtonCaption.Export", {n: n === 0? LocaleX.GetIZO("Datumizo.All") : n}), reqFunc: "Export" },
            //{ icon: "import", func: "Import", caption: () => LocaleX.Get("${2}.ButtonCaption.Import"), reqFunc: "Import" },
          ],
        },
      }
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

  componentWillUnmount(){
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
    let {addOns, onDataChange} = this.props;
    let {base, serverSidePagination, title} = this.state;
    if(!Authority.IsAccessibleQ("${4}")) return <Denied/>;
    
    let pageTitle = title;
    if(_.isFunction(title)){
      pageTitle = title();
    }

    return (
      <VStack>
        <Box padding={1} width="100%">
          <Typography style={{
            textAlign: "left", 
            width: "100%",
            fontSize: 25,
            color: ColorX.GetColorCSS(IZOTheme.foreground)
            }}>
            {pageTitle}
          </Typography>
        </Box>
        <Datumizo lang={STORE.lang}
          base={base}
          addOns={addOns} 
          serverSidePagination={serverSidePagination} 
          onMounted={this.onMountDatumizo} 
          onDataChange={onDataChange}
          />
      </VStack>
    );
  }

}

export default observer(${1});
