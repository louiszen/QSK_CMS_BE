
const moment = require("moment");
const { v1 } = require("uuid");

const doc = {
  _id: v1(),
  refID: "QVaccinated",
  description: "Fully vaccinated",
  version: 3,
  lastUpdate: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
  effective: {
    Start: moment("2021/06/03", "YYYY/MM/DD").toISOString(),
    End: null
  },
  question: {
    EN: "Have you fully vaccinated?",
    TC: "您是否已全面接種疫苗？",
    SC: "您是否已全面接种疫苗？",
  },
  verdict: {
    yes: {
      EN: "Fully vaccinated",
      TC: "已全面接種疫苗",
      SC: "已全面接种疫苗"
    },
    no: {
      EN: "Not fully vaccinated",
      TC: "未全面接種疫苗",
      SC: "未全面接种疫苗"
    }
  },
  showInfo: true,
  infoContent: {
    EN: "Fully vaccinated means the suggested dosage has been administered in accordance with the relevant guidelines of a COVID-19 vaccination course at least 14 days prior to arrival at Hong Kong",
    TC: "全面接種是指在抵達香港前至少 14 天已按照 COVID-19 疫苗接種課程的相關指南接種了建議劑量",
    SC: "全面接种是指在抵达香港前至少 14 天已按照 COVID-19 疫苗接种课程的相关指南接种了建议剂量"
  }, 
};

module.exports = doc;