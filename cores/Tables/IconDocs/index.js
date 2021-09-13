const _Generic = require('../_Generic');

const Add = require('./Add');
const Delete = require('./Delete');
const DeleteBulk = require('./DeleteBulk');
const Edit = require('./Edit');
const Export = _Generic.Export;
const Get = _Generic.Get;
const Import = _Generic.Import;
const Info = _Generic.Info;
const List = _Generic.List;

module.exports = {
  Add,
  Delete,
  DeleteBulk,
  Edit,
  Export,
  Get,
  Import,
  Info,
  List
}