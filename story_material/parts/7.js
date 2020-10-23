const commonArray = [
  ["Sep found me an A-frame that would be all mine."],
  [
    "I had almost nothing but that was fine, Sep said they would provide everything I might need."
  ]
];

const choicePreArray = [
  {
    text: "Within days I fell into the routine of Uoma...",
    id: { part: 8, sub: "a" }
  }
];

export const seven = {
  "0": {
    a: {
      text: [
        ["I told them that I knew matter, that I was a sculptor."],
        [
          "I had always loved making things with my hands, instilling inert stuff with life."
        ],
        [
          "I told them about the artists that I loved, and the work they had made: Giacometti, Serra, Smithson, Holt."
        ],
        ["Sep smiled when I said this."],
        [
          "He said that he had wanted some more art around Uoma, and that I would be able to work full time in the studio."
        ],

        ["Sep found me an A-frame that would be all mine."],
        [
          "I had almost nothing but that was fine, Sep said they would provide everything I might need."
        ].concat(commonArray)
      ],
      choices: choicePreArray
    },
    b: {
      text: [
        [
          "I told them that I knew information, that I was a computer programmer."
        ],
        [
          "I kept out the details, but told them that I could delve into systems, into those cold brains, and ask them to do our bidding."
        ],
        [
          "Sep said he was wary of technology, but had had a project in mind for a few months that he thought I might be able to help out with."
        ],
        [
          "He said they had some money set aside and he would be able to purchase a computer and a modem I could use."
        ].concat(commonArray)
      ],
      choices: choicePreArray
    }
  }
};
