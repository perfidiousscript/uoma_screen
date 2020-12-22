const firstChoices = {}; //"I couldn't stop thinking about the shrine and what might be inside."/
//"I couldn't stop thinking about the intruder into Uoma, and why those men in the dining room had call him an 'Ash-Burner'.

const aChoices = {
  ...firstChoices,
  ...{
    text: "I decided that I had to get rid of them.",
    id: { part: "23", sub: "f" }
  }
};

const bChoices = {
  ...firstChoices,
  ...{
    text: "I decided that I had to get rid of them.",
    id: { part: "23", sub: "g" }
  }
};

const secondChoices = {};
//(Courage over two, Trust over two)"What is an Ash Burner, Sep."
//(Courage over two, Trust under two)"What is an Ash Burner, Sep."
//(Courage under two, Trust over two)"What is an Ash Burner, Sep."

//a: Nar is a programmer, back at their studio
//b: Nar is a sculptor, back at their stufio
//c: Nar goes to Sep's, low trust.
//d: Nar goes to Sep's, high trust.

export const twentyTwo = {
  "0": {
    a: {
      text: [
        ["I sat down at the terminal."],
        ["The cursor, blinking green, held a mocking air ."],
        [
          "Sep's notes lay spread out on the desk. I had always prided myself on being a tidy person, but trying tryin to make sense of his notes threw me for a loop."
        ],
        [
          "I was still at a loss for what he wanted me to do, the project a jumble."
        ],
        ["My mind wandered away from the terminal."],
        [
          "I couldn't help but feel that all the papers were cluttering up my mind."
        ],
        ["That their presence was more of a hindrance than a help."],
        [
          "A great weighed down on me, the pressure of this project, the stress of knowing that Sep expected so much of me."
        ]
      ],
      choices: aChoices
    },
    b: {
      text: [
        ["I saw at my plinth."],
        [
          "Sep's notes and drawings lay out around the studio. A hideous jumble."
        ],
        ["I had made a few studies of the drawings in clay, set them aside."],
        ["They had already dried out begun to crack at the surface."],
        ["Their eyes looked out at me, misshapen and glaring."],
        ["I suddenly felt a deep sense of dread at their presence."],
        [
          "I had worked hard to make them, but the seemed instilled with something alien, as if they had been made by another had and placed in my studio to menace me."
        ]
      ],
      choices: bChoices
    },
    c: {
      text: [],
      choices: []
    },
    d: {
      text: [],
      choices: []
    }
  }
};
