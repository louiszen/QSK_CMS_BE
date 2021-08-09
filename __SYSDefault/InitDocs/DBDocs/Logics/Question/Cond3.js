const doc = {
  _id: "Cond3",
  order: 3,
  type: "question",
  variant: "yesno",
  description: "Stayed at the relevant location for more than 2 hours (For severity 1 location(s) only)",
  conditions: {
    $and: [
      {
        ref: "Cond1",
        $eq: 1
      },
      {
        ref: "Cond2",
        $eq: true
      }
    ]
  },
  question: {
    title: {
      EN: "Have you stayed at @Cond1 for more than 2 hours?",
      TC: "",
      SC: ""
    }
  }
}

module.exports = doc;