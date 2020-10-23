const commonText_0_1 = [
  ["Within days I fell into the routine of Uoma:"],
  [
    "we woke every morning before sunrise, ate together, meditated together, and worked all morning until the mid-day meal."
  ],
  [
    "I helped out a bit in the orchard or the garden some mornings, doing a few tasks here and there."
  ]
];

const commonText_0_2 = [
  ["Most evenings Sep would give a talk about any number of topics."],
  [
    "He seemed to know a bit about everything: botany, biology, sociology, psychology."
  ],
  ["I was allowed to work on my own for as long as I wanted."],
  [
    " No one to interrupt me, no one to criticize me or ask me what I was doing."
  ]
];

const commonText_0_3 = [
  [
    "Without even having to ask Sep had one of the younger members bring me my meals."
  ],
  ["For a week or so I hardly left my at all, so intent was I in my work."]
];

const sculptor_0_1 = [["I spent the afternoons setting up my studio"]];

const sculptor_0_2 = [
  ["Once I got my studio set up I barely left, even for meals."],
  [
    "I simply explored, I went where the clay sent me, and along the paths of my mind."
  ]
];

const programmer_0_1 = [["I spent the afternoons setting up my workstation"]];

const programmer_0_2 = [
  [
    "Once I got my computer set up and networked set up I barely left, even for meals."
  ],
  [
    "I simply explored, I wandered with the heart of the machine, and along the wires of the network."
  ]
];

const choiceArray = [
  {
    text:
      "After I had been at Uoma for a week Sep came to me and invited me to talk with him privately.",
    id: { part: 9, sub: "a" }
  }
];

export const eight = {
  "0": {
    a: {
      text: commonText_0_1
        .concat(sculptor_0_1)
        .concat(commonText_0_2)
        .concat(sculptor_0_2)
        .concat(commonText_0_3),
      choices: choiceArray
    },
    b: {
      text: commonText_0_1
        .concat(programmer_0_1)
        .concat(commonText_0_2)
        .concat(programmer_0_2)
        .concat(commonText_0_3),
      choices: choiceArray
    }
  },
  "1": { a: { text: [], choices: [] } },
  "2": { a: { text: [], choices: [] } },
  "3": { a: { text: [], choices: [] } }
};
