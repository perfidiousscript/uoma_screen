const commonText0 = [
  [
    '"I believe if you stay here with us long enough the project will become more clear. All I ask is that you observe this place and work as you will. Watch and listen and come and speak with me once a week. That is all I ask."'
  ],
  ["Sep handed me a manila folder."],
  [
    '"These are some notes I have been working on for sometime. My own failed attempts, that you can refer to."'
  ],
  [
    "It was an unusual project. On the one hand I would be fed and housed and allowed to work on whatever I wanted, for as long as I wanted."
  ],
  ['"Do you think you can do it?"']
];
export const twelve = {
  "0": {
    a: {
      text: [
        ["I asked Sep what he had in mind."],
        ["I would like you to make something like a sculpture of Uoma."],
        [
          'I had to laugh, "A miniature of the whole settlement? That would take months, years probably."'
        ],
        [
          'Sep, looking grave, shook his head, "Not in the literal sense. More like- More like a sculpture of the soul of the place. In impression of Uoma as seen from the inside."'
        ],
        [
          "This seemed more reasonable, though I was a bit more confused."
        ].concat(commonText0)
      ],
      choices: [
        {
          text: [
            "I admitted to Sep, I found the task confusing, but I thought that I thought I could do it."
          ],
          id: { part: "13", sub: "a" },
          effect: "trustUp"
        },
        {
          text: [
            "I admitted to Sep that I was utterly perplexed, that I wasn't sure that anyone could finish a task like this."
          ],
          id: { part: "13", sub: "a", effect: "courageDown" }
        }
      ]
    },
    b: {
      text: [
        ["I asked Sep what he had in mind."],
        ['"I would like you to make a program that recreates all of Uoma."'],
        [
          'I had to laugh, "A simulation of the whole place? That would take months, years probably."'
        ],
        [
          'Sep, looking grave, shook his head, "Not in the literal sense. More like- More like a program that represents the soul of the place. An impression of Uoma as seen from the inside."'
        ],
        ["I was a at a total loss as to what Sep meant."].concat(commonText0)
      ],
      choices: [
        {
          text: [
            "I admitted to Sep, I found the task confusing, but I thought that I thought I could do it."
          ],
          id: { part: "13", sub: "b" },
          effect: "trustUp"
        },
        {
          text: [
            "I admitted to Sep that I was utterly perplexed, that I wasn't sure that anyone could finish a task like this."
          ],
          id: { part: "13", sub: "b", effect: "courageDown" }
        }
      ]
    }
  }
};
