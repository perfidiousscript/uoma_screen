const choiceArray = [
  {
    text: [
      "I figured that Sep would talk about what happened to day, that I might get some answers so I went to to the meditation hall."
    ],
    id: { part: "20", sub: "a" },
    active: trustOverCourage
  },
  {
    text: [
      "I couldn`t care less what Sep might have to talk about and went back to my A-Frame."
    ],
    id: { part: "20", sub: "b" },
    active: courageOverTrust
  }
];
const announcement = [
  [
    "Everyone turned to the podium where a man, one of Sep`s close helpers, was standing."
  ],
  [
    '"Everyone, Sep will be giving a special talk immediately following evening meal. Please assemble in the meditation hall immediately following evening meal. Thank you."'
  ]
];
export const seventeen = {
  "0": {
    a: {
      text: [
        ['I shook my head and said, "You`re wrong. I know what I saw."'],
        ["She still smiled, but it was strained."],
        [
          '"But maybe it was an illusion, a hallucination? Adjusting to a new place can be stressful, and Uoma is so unlike anywhere else on earth-" '
        ],
        [
          "She seemed at a loss for words, as if this alone should settle the matter."
        ]
      ].concat(announcement),
      choices: choiceArray
    },
    b: {
      text: [
        ['I nodded and said "You`re right. There wasn`t a body."'],
        [
          '"Right!" She gave a broad smile, relieved. "Sometimes things aren`t quite how we expect them to be. They might be a little frightening but they are actually for the better. For the best."'
        ],
        ["She looked off behind me, seemed to give a little nod."],
        [
          '"I`m glad you came to Uoma! Sep said that you are going to be a valuable asset here."'
        ],
        [
          "Everyone turned to the podium where a man, one of Sep`s close helpers, was standing."
        ]
      ].concat(announcement),
      choices: choiceArray
    }
  }
};
