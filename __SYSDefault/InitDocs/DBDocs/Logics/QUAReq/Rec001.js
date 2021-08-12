const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  lastUpdate: moment('2021/06/03', 'YYYY/MM/DD'),
  order: 1,
  description: "compulsory quarantine",
  params: [
    {
      _id: 1,
      description: "No. of compulsory quarantine days",
      format: "number"
    },
    {
      _id: 2,
      description: "Compulsory quarantine location",
      format: "select",
      choice: [
        "Designated quarantine hotel",
        "Home, hotel or other accomodation"
      ]
    }
  ],
  component: {
    icon: "Images/QReq1.png",
    title: {
      EN: "Compulsory quarantine",
      TC: "",
      SC: "",
    },
    subtitle: {
      EN: "$1 days",
      TC: "",
      SC: "",
    },
    content: {
      EN: "Compulsory quarantine at designated places ($2)",
      TC: "",
      SC: ""
    }
  }
};

module.exports = doc;