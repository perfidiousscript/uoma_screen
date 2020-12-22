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

const sepArrayOne = [
  ["I walked over to Sep's place."],
  ["I passed a group of Uomans on the way."]
];

const sepArrayTwo = [
  ["When I knocked on Sep's door a young woman I had never seen answered."],
  ["She was short, with a mousey look and younger than me."],
  ["'Can I help you?'"],
  ["She seemed dour, disinterested in me or my presence."],
  ["'I'm here to see Sep.'"],
  ["About what?"],
  [
    "'I'm working on a project for him. I`d like to talk to him directly if I could.'"
  ],
  ["She eyed me warily."],
  ["'He's sort of busy right now.'"],
  ["'It'll be quick. Can you just let him know that I'm here?'"],
  ["She turned away in a huff without inviting me in."],
  ["I heard her talking in another room and a few moments later Sep appeared."]
];

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
        [
          "I had made a few studies of the drawings in clay over the last week but had set them aside."
        ],
        ["They had already dried out, begun to crack at the surface."],
        ["Their eyes looked out at me, misshapen and glaring."],
        ["I suddenly felt a deep sense of dread at their presence."],
        [
          "I had worked hard to make them, but the seemed instilled with something alien, as if they had been made by another had and placed in my studio to menace me."
        ]
      ],
      choices: bChoices
    },
    c: {
      text: sepArrayOne
        .concat([
          ["They stopped talking when I passed and watched me."],
          [
            "Before I might have smiled and waved, but their looks were sour and I just continued on."
          ]
        ])
        .concat(sepArrayTwo),
      choices: [
        { text: ["He waved me in silently"], id: { part: "23", id: "h" } }
      ]
    },
    d: {
      text: sepArrayOne
        .concat([
          [
            "They got quiet as I passed, one of them nodded and waved. I waved back"
          ],
          [
            "I could tell there was some tension between us, but as long as Sep was on my side I figured things would smooth over."
          ]
        ])
        .concat(sepArrayTwo),
      choices: [
        { text: ["Sep smiled and waved me in."], id: { part: "23", id: "i" } }
      ]
    }
  }
};
