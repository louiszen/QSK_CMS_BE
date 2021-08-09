const doc = {
  _id: "Cond4",
  order: 5,
  type: "question",
  variant: "yesno",
  description: "Via Return2HK Scheme (For HKR who have not been to places outside Mainland Chaina and Macao only)",
  conditions: {
    $and: [
      {
        ref: "Cond1",
        $eq: 99
      },
      {
        ref: "Cond2",
        $eq: true
      },
      {
        ref: "Verdict1",
        $eq: true
      }
    ]
  },
  question: {
    title: {
      EN: "Are you entering Hong Kong under the \"Return2HK\" Scheme?",
      TC: "",
      SC: ""
    }
  }
}

module.exports = doc;