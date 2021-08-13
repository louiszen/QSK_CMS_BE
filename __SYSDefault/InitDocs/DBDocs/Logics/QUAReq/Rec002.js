const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  refID: "QUAReq002",
  description: "Compulsory quarantine location",
  format: "select",
  options: [
    {EN: "Designated quarantine hotel", TC: "", SC: ""},
    {EN: "Home, hotel or other accomodation", TC: "", SC: ""}
  ]
};

module.exports = doc;