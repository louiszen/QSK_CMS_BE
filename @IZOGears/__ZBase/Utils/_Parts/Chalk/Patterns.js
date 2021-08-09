/**
 * Pattern to be colored
 */
const Patterns = [
  {
    regex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,
    match: [
      {
        index: 0,
        colors: ["Underline","Magenta"]
      }
    ],
    type: "url"
  },
  {
    regex: /^v[0-9.]+/g,
    match: [
      {
        index: 0,
        colors: ["Yellow"]
      }
    ],  
    type: "version"
  },
  {
    regex: /^[0-9.]+$/g,
    match: [
      {
        index: 0,
        colors: ["Yellow"]
      }
    ],  
    type: "number"
  },
  {
    regex: /(^e)([^\D\]]+)$/g,
    match: [
      {
        index: 1,
        colors: ["Italic", "BrightRed"]
      },
      {
        index: 2,
        colors: ["Red"]
      }
    ], 
    type: "error"
  },
  {
    regex: /(\()([.\d]*?)(s)(\))/g,
    match: [
      {
        index: 1,
        colors: ["Gray"]
      },
      {
        index: 2,
        colors: ["Italic", "BrightGreen", "Bold"]
      },
      {
        index: 3,
        colors: ["Bold", "Gray"]
      },
      {
        index: 4,
        colors: ["Gray"]
      }
    ],
    type: "lapse"
  },
  {
    regex: /(\[)([^\n\]]{2,}?)(\])/g, 
    match: [
      {
        index: 1,
        colors: ["Gray"]
      },
      {
        index: 2,
        colors: ["Blue", "Bold"]
      },
      {
        index: 3,
        colors: ["Gray"]
      }
    ],
    type: "[]"
  },
  {
    regex: /(\{)([^\n\}]{2,}?)(\})/g, 
    match: [
      {
        index: 1,
        colors: ["Gray"]
      },
      {
        index: 2,
        colors: ["Green", "Italic", "Bold"]
      },
      {
        index: 3,
        colors: ["Gray"]
      }
    ],
    type: "{}"
  }
];

module.exports = Patterns;