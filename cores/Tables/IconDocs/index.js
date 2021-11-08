const _Generic = require("../_GenricOnlyLU");

const Add = require("./Add");
const Delete = require("./Delete");
const DeleteBulk = require("./DeleteBulk");
const Duplicate = _Generic.Duplicate;
const Edit = require("./Edit");
const Export = _Generic.Export;
const Get = _Generic.Get;
const Import = _Generic.Import;
const Info = _Generic.Info;
const List = _Generic.List;

module.exports = {
  Add,
  Delete,
  DeleteBulk,
  Duplicate,
  Edit,
  Export,
  Get,
  Import,
  Info,
  List
};