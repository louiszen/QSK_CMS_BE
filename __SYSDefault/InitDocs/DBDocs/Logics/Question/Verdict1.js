const doc = {
  _id: "Verdict1",
  order: 4,
  type: "verdict",
  variant: "yesno",
  description: "Eligible to enter HK (Based on Cond1-3)",
  default: true,
  except: {
    $or: [
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 1
          },
          {
            ref: "Cond2",
            $eq: true
          },
          {
            ref: "Cond3",
            $eq: true
          }
        ]
      },
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 1
          },
          {
            ref: "Cond2",
            $eq: false
          }
        ]
      },
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 2
          },
          {
            ref: "Cond2",
            $eq: false
          }
        ]
      },
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 3
          },
          {
            ref: "Cond2",
            $eq: false
          }
        ]
      },
      {
        $and: [
          {
            ref: "Cond1",
            $eq: 4
          },
          {
            ref: "Cond2",
            $eq: false
          }
        ]
      }
    ]
  }
}

module.exports = doc;