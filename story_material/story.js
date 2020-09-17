import { two_a } from "./2/2a.js";
import { two_b } from "./2/2b.js";
export const story_json = {
  "0": {
    text: [
      ["An Echo"],
      ["That’s what it is: an echo."],
      ["I’ll remember what I was, at some point."],
      ["It will come back to me."]
    ],
    choices: [{ text: "Choice 1", id: "1" }, { text: "Choice 2", id: "1" }]
  },
  "1": {
    text: [
      ["This is the new choice"],
      ["It works really well"],
      ["    "],
      ["     "]
    ],
    choices: [
      { text: "This goes to 2a", id: "2a" },
      { text: "This goes to 2b", id: "2b" }
    ]
  },
  "2a": two_a,
  "2b": two_b
};
