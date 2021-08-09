const doc = {
  Avatar: {
    username: "avatar",
    password: "avatar",
    UserDisplayName: "Avatar",
    Version: 1,
    Level: 2,
    authority: {
      Dashboard: ["*"],
      Avatar: ["*"],
    },
  },
  Demo: {
    username: "demo",
    password: "demo",
    UserDisplayName: "Demo",
    Version: 1,
    Level: 2,
    authority: {
      Dashboard: ["*"],
      Convlog: ["*"],
      Talk2Elain: ["*"],
      Training: ["*"],
      FAQ: ["*"],
      Avatar: ["*"],
      Answer: ["*"],
      System: {
        General: ["*"],
        NLP: ["*"],
        Chatbot: ["*"],
      }
    }
  }
};

module.exports = doc;
