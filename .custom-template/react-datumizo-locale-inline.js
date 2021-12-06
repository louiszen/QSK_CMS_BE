import React, { Component } from "react";
import PropsType from "prop-types";
import { observer } from "mobx-react";

import _ from "lodash";
import { Box, Typography } from "@material-ui/core";

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
      title: () => LocaleX.Prase({
        EN: "${2}",
        TC: "${3}"
      }),
      serverSidePagination: false, 
      base: {
        title: () => LocaleX.Prase({
          EN: "${2}",
          TC: "${3}"
        }),
        exportDoc: "${4}",
        schema: schema,
        reqAuth: "${5}",

        noDefaultTable: false,
        noDefaultButtons: false,

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

        },

        Connect: {
          DBInfo: datalink.Request.DBInfo,
          List: datalink.Request.List,
          schema: schema.Table
        },

        operations: {
          Add: {
            title: () => LocaleX.Prase({
              EN: "Add ${2}",
              TC: "新增${3}"
            }),
            url: datalink.Request.Add,
            success:  () => LocaleX.Prase({
              EN: "${2} Added Successfully",
              TC: "成功新增${3}"
            }),
            fail:  () => LocaleX.Prase({
              EN: "${2} Add Failed: ",
              TC: "新增${3}失敗: "
            }),
            schema: schema.Add,
            buttons: ["Clear", "Submit"],
            onSubmit: "Add"
          },
          Delete: {
            title: () => LocaleX.Prase({
              EN: "Delete this ${2}?",
              TC: "刪除${3}"
            }),
            content: () => LocaleX.Prase({
              EN: "Caution: This is irrevertable.",
              TC: "注意: 這操作不可逆轉"
            }),
            url: datalink.Request.Delete,
            success: () => LocaleX.Prase({
              EN: "${2} Deleted Successfully.",
              TC: "成功刪除${3}"
            }),
            fail: () => LocaleX.Prase({
              EN: "${2} Delete Failed: ",
              TC: "刪除${3}失敗: "
            }),
            onSubmit: "Delete"
          },
          Edit: {
            title: () => LocaleX.Prase({
              EN: "Edit ${2}",
              TC: "編輯${3}"
            }),
            url: datalink.Request.Edit,
            success: () => LocaleX.Prase({
              EN: "${2} Edited Successfully",
              TC: "成功編輯${3}"
            }),
            fail: () => LocaleX.Prase({
              EN: "${2} Edit Failed: ",
              TC: "編輯${3}失敗: "
            }),
            schema: schema.Edit,
            buttons: ["Revert", "Submit"],
            onSubmit: "Edit"
          },
          Info: {
            title: () => LocaleX.Prase({
              EN: "${2}",
              TC: "${3}"
            }),
            url: datalink.Request.Info,
            success: () => LocaleX.Prase({
              EN: "${2} Load Successfully",
              TC: "成功載入${3}"
            }),
            fail: () => LocaleX.Prase({
              EN: "${2} Load Failed: ",
              TC: "載入${3}失敗: "
            }),
            schema: schema.Info,
            readOnly: true
          },
          Duplicate: { //direct duplicate, for to Add, plz use func: "DuplicateAdd"
            title: () => LocaleX.Prase({
              EN: "Duplicate",
              TC: "複製"
            }),
            url: datalink.Request.Duplicate,
            success: () => LocaleX.Prase({
              EN: "${2} Duplicated Successfully.",
              TC: "成功複製${3}"
            }),
            fail: () => LocaleX.Prase({
              EN: "${2} Duplicate Failed: ",
              TC: "複製${3}失敗: "
            }),
            onSubmit: "Duplicate"
          },
          Import: {
            title: () => LocaleX.Prase({
              EN: "Import ${2}s",
              TC: "導入${3}"
            }),
            content: "",
            url: datalink.Request.Import,
            success: () => LocaleX.Prase({
              EN: "${2}s Imported Successfully.",
              TC: "成功導入${3}"
            }),
            fail: () => LocaleX.Prase({
              EN: "${2}s Import Failed: ",
              TC: "導入${3}失敗: "
            }),
            schema: schema.ImportFormat,
            replace: false
          },
          Export: {
            url: datalink.Request.Export,
            schema: schema.Export,
          },
          DeleteBulk: {
            title: (n) => LocaleX.Prase({
              EN: "Delete these @n ${2}?",
              TC: "刪除這@n個${3}?"
            }, {n:n}),
            content: () => LocaleX.Prase({
              EN: "Caution: This is irrevertable.",
              TC: "注意: 這操作不可逆轉"
            }),
            url: datalink.Request.DeleteBulk,
            success: () => LocaleX.Prase({
              EN: "${2} Deleted Successfully.",
              TC: "成功刪除${3}"
            }),
            fail: () => LocaleX.Prase({
              EN: "${2} Delete Failed: ",
              TC: "刪除${3}失敗: "
            }),
            onSubmit: "DeleteBulk",
          },
        },

        buttons: {
          inline: [
            { icon: "edit", func: "Edit", 
              caption: () => LocaleX.Prase({
                EN: "Edit",
                TC: "編輯"
              }), 
              reqFunc: "Edit" },
            { icon: "info", func: "Info", 
              caption: () => LocaleX.Prase({
                EN: "Details",
                TC: "詳細資料"
              })},
            { icon: "delete", func: "Delete", 
              caption: () => LocaleX.Prase({
                EN: "Delete",
                TC: "刪除"
              }), reqFunc: "Delete" },
            //{ icon: "duplicate", func: "Duplicate", 
            //  caption: () => LocaleX.Prase({
            //    EN: "Duplicate",
            //    TC: "複製"
            //  }), reqFunc: "Duplicate" },
            //{ icon: "duplicate", func: "DuplicateAdd", 
            //  caption: () => LocaleX.Prase({
            //  EN: "Duplicate",
            //  TC: "複製"
            //}), reqFunc: "Duplicate" },
          ],
          left: [
            { icon: "add", func: "Add", 
            caption: () => LocaleX.Prase({
              EN: "Add ${2}",
              TC: "新增${3}"
            }), reqFunc: "Add" }
          ],
          right: [
            { icon: "deletebulk", func: "DeleteBulk", 
              caption: (n) => LocaleX.Prase({
                EN: "Delete(@n)",
                TC: "刪除(@n)"
              }, {n:n}), reqFunc: "Delete", theme: "caution" },
            //{ icon: "export", func: "Export", 
            //  caption: (n) => LocaleX.Prase({
            //  EN: "Export(@n)",
            //  TC: "導出(@n)"
            //}, {n: n === 0? LocaleX.Get("__IZO.Datumizo.All") : n}), reqFunc: "Export" },
            //{ icon: "import", func: "Import", 
            //  caption: () => LocaleX.Prase({
            //  EN: "Import",
            //  TC: "導入"
            // }), reqFunc: "Import" },
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
    if(!Authority.IsAccessibleQ("${5}")) return <Denied/>;
    
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
