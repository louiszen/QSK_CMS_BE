const Grouping = [
  {
    label: "Location",
    name: "refID"
  },
  {
    label: "Group",
    name: "group"
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "startOfDay"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "endOfDay"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    format: "datetime",
    readOnly: true
  }
];

const Location = [
  {
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "External ID",
    name: "externalID",
  },
  {
    label: "in China?",
    name: "inChina",
    format: "bool"
  },
  {
    label: "Display Name (EN)",
    name: "display.EN",
    format: "text"
  },
  {
    label: "Display Sequence (EN)",
    name: "priority.EN",
    format: "number"
  },
  {
    label: "Display Name (TC)",
    name: "display.TC",
    format: "text"
  },
  {
    label: "Display Sequence (TC)",
    name: "priority.TC",
    format: "number"
  },
  {
    label: "Display Name (SC)",
    name: "display.SC",
    format: "text"
  },
  {
    label: "Display Sequence (SC)",
    name: "priority.SC",
    format: "number"
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "startOfDay"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "endOfDay"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    format: "datetime",
  }
];

const SevGroup = [
  {
    label: "Ref. ID",
    name: "refID"
  },
  {
    label: "Display Name",
    name: "display"
  },
  {
    label: "Severity",
    name: "severity",
    format: "number"
  },
  {
    label: "Relevant Period (Days)",
    name: "period",
    format: "number"
  },
  {
    label: "Effective Start Date",
    name: "effective.Start",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "startOfDay"
  },
  {
    label: "Effective End Date",
    name: "effective.End",
    format: "datetime",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    //dateMod: "endOfDay"
  },
  {
    label: "Last Update",
    name: "lastUpdate",
    dateFormat: "YYYY/MM/DD HH:mm:ss",
    format: "datetime",
  }
];

module.exports = {
  SevGroup,
  Grouping,
  Location
}