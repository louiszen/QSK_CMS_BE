const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "Cond1",
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 2,
  type: "question",
  variant: "select",
  description: "The highest severity among all location(s) the pax has been to during the relevant",
  conditions: {},
  question: {
    title: {
      EN: "Where have you been?",
      TC: "",
      SC: "",
    },
    subtitle: {
      EN: "Select from below your boarding location and all places you have stayed in the <bold>past 21 days </bold> before your arrival in Hong Kong:",
      TC: "",
      SC: "",
    },
  },
  choices: {
    multiSelect: true,
    extDB: true,
    dbName: "Location",
    display: "display",
    applyMapping: true,
    mapping: {
      extDB: true,
      dbName: "Grouping",
      link: "location",
      value: "value"
    },
    applyInduction: true,
    induction: "min",
  }
}

module.exports = doc;