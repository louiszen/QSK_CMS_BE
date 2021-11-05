const moment = require('moment');
const { v1 } = require('uuid');

const doc = {
  _id: v1(),
  refID: "FT002",
  description: "FSelf-serviced test",
  version: 3,
  lastUpdate: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment('2021/06/03', "YYYY/MM/DD").toISOString(),
    End: null
  },
  symbol: "#",
  display: {
    content: {
      EN: "Before leaving the airport, you will be given the specimen collection bottles before leaving the airport. Please refer to <url href=\"http://www.google.com\">government website</url> on how to self-collect and return the sample.",
      TC: "在離開機場之前，您將收到標本採集瓶。 請參閱<url href=\"http://www.google.com\">政府網站</url>了解如何自行收集和退回樣品。",
      SC: "在离开机场之前，您将收到标本采集瓶。 请参阅<url href=\"http://www.google.com\">政府网站</url>了解如何自行收集和退回样品。",
    }
  }
};

module.exports = doc;