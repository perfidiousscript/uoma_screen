export const wander_2 = {
  studio: {
    "1": {
      text: [
        ["I was standing outside my workspace."],
        ["The Walkie-Talkie crackled:"],
        [
          "This is James, I'm at the School now, heading North to their A-frame."
        ],
        [
          "The second voice came on 'This is Bob. I'm at the NorthWest A-Frames, heading NorthEast to the Garden.'"
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside my workspace.",
          id: { part: "wander_2", area: "studio", time: "2" }
        },
        {
          text: "(S) I walked to my own A-frame.",
          id: { part: "wander_2", area: "foundByJames" }
        },
        {
          text: "(E) I walked to the Garden.",
          id: { part: "wander_2", area: "gardenS", time: "2" }
        }
      ]
    },
    "2": {
      text: [
        ["I was standing outside my workspace."],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        ["I could see the beam of James's flashlight over at my A-frame."],
        [
          "The second voice came on 'This is Bob. I'm at the Garden now, heading South to Sep's cabin.''"
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside my workspace.",
          id: { part: "wander_2", area: "studio", time: "3" }
        },
        {
          text: "(S) I walked to my own A-frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "3" }
        },
        {
          text: "(E) I walked to the Garden.",
          id: { part: "wander_2", area: "gardenS", time: "3" }
        }
      ]
    },
    "3": {
      text: [
        ["I was standing outside my workspace."],
        ["The Walkie-Talkie crackled: "],
        [
          "This is James, I'm at the North-East A-Frames now, heading South-West to the Path."
        ],
        [
          "The second voice came on 'This is Bob. I`m at the North-West corner, heading over to the Garden.'"
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside my workspace.",
          id: { part: "wander_2", area: "studio", time: "4" }
        },
        {
          text: "(S) I walked to my own A-frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "4" }
        },
        {
          text: "(E) I walked to the Garden.",
          id: { part: "wander_2", area: "gardenS", time: "4" }
        }
      ]
    },
    "4": {
      text: [
        ["I was standing outside my workspace."],
        ["The Walkie-Talkie crackled:"],
        [
          "This is James, I'm on the Path just East of the Shrine. Heading North to the School."
        ],
        [
          "The second voice came on 'This is Bob. I`m at the Meditation Hall. Still no Sign of them here. Heading North the North-West A-frames now.'"
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside my workspace.",
          id: { part: "wander_2", area: "studio", time: "1" }
        },
        {
          text: "(S) I walked to my own A-frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "1" }
        },
        {
          text: "(E) I walked to the Garden.",
          id: { part: "wander_2", area: "gardenS", time: "1" }
        }
      ]
    }
  },
  aFrameNar: {
    "1": {
      text: [
        ["I was standing outside of my A-Frame."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the NorthWest A-Frames, heading East to the Garden."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside my A-Frame",
          id: { part: "foundByJames" }
        },
        {
          text: "(N) I walked to my studio.",
          id: { part: "wander_2", area: "studio", time: "2" }
        },
        { text: "(S) I walked to the school", id: { part: "foundByJames" } },
        {
          text: "(E) I walked to Sep`s lodging`s.",
          id: { part: "wander_2", area: "seps", time: "2" }
        },
        {
          text: "(W) I ducked into the Forest.",
          id: { part: "wander_2", area: "forest", time: "2" }
        }
      ]
    },
    "3": {
      text: [
        ["I was standing outside of my A-Frame."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the North-East A-frames. Heading South-West to the Path."'
        ],
        [
          'The second voice came on "This is Bob. I`m at Sep`s place. Heading South-West to the Meditation Hall."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside my A-Frame",
          id: { part: " wander_2", area: "aFrameNar", time: "4" }
        },
        {
          text: "(N) I walked to my studio.",
          id: { part: "wander_2", area: "studio", time: "4" }
        },
        {
          text: "(S) I walked to the school",
          id: { part: "wander_2", area: "school", time: "4" }
        },
        {
          text: "(E) I walked to Sep`s lodging`s.",
          id: { part: "wander_2", area: "seps", time: "4" }
        },
        {
          text: "(W) I ducked into the Forest.",
          id: { part: "wander_2", area: "forest", time: "4" }
        }
      ]
    },
    "4": {
      text: [
        ["I was standing outside of my A-Frame."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the Path West of the Shrine. Heading North to the School."'
        ][
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        [
          {
            text: "(C) I waited outside my A-Frame",
            id: { part: " wander_2", area: "aFrameNar", time: "1" }
          },
          {
            text: "(N) I walked to my studio.",
            id: { part: "wander_2", area: "studio", time: "1" }
          },
          {
            text: "(S) I walked to the school",
            id: { part: "wander_2", area: "school", time: "1" }
          },
          {
            text: "(E) I walked to Sep`s lodging`s.",
            id: { part: "wander_2", area: "seps", time: "1" }
          },
          {
            text: "(W) I ducked into the Forest.",
            id: { part: "wander_2", area: "forest", time: "1" }
          }
        ]
      ]
    }
  },
  gardenS: {
    "1": {
      text: [
        ["I was standing in the South Plot of the Garden."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the NorthWest A-Frames, heading East to the South Plot of the Garden."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the Garden.",
          id: { part: "foundByBob" }
        },
        {
          text: "(N) I walked to the North Plot of the Garden.",
          id: { part: "wander_2", area: "gardenN", time: "2" }
        },
        {
          text: "(S) I walked South, to Sep's lodgings.",
          id: { part: "wander_2", area: "seps", time: "2" }
        },
        {
          text: "I walked to my studio.",
          id: { part: "wander_2", area: "studio", time: "2" }
        }
      ]
    },
    "3": {
      text: [
        ["I was standing in the South Plot of the Garden."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the North-East A-frames. Heading South-West to the Path."'
        ],
        [
          'The second voice came on "This is Bob. I`m at Sep`s place. Heading South-West back to the Meditation Hall."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the Garden.",
          id: { part: "wander_2", area: "gardenS", time: "4" }
        },
        {
          text: "(N) I walked to the North Plot of the Garden.",
          id: { part: "wander_2", area: "gardenN", time: "4" }
        },
        {
          text: "(S) I walked South, to Sep's lodgings.",
          id: { part: "wander_2", area: "seps", time: "4" }
        },
        {
          text: "I walked to my studio.",
          id: { part: "wander_2", area: "studio", time: "4" }
        }
      ]
    },
    "4": {
      text: [
        ["I was standing in the South Plot of the Garden."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the Path West of the Shrine. Heading North to the School."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the Garden.",
          id: { part: "wander_2", area: "gardenS", time: "1" }
        },
        {
          text: "(N) I walked to the North Plot of the Garden.",
          id: { part: "wander_2", area: "gardenN", time: "1" }
        },
        {
          text: "(S) I walked South, to Sep's lodgings.",
          id: { part: "wander_2", area: "seps", time: "1" }
        },
        {
          text: "(E) I walked to my studio.",
          id: { part: "wander_2", area: "studio", time: "1" }
        }
      ]
    }
  },
  gardenN: {
    "1": {
      text: [
        [
          "I stood in the North plot of the Garden. Thick forest rimmed the North, East and West sides."
        ],
        ["The walkie-talkie crackled:"],
        [
          "This is James. I'm at the School now. Heading North to their A-Frame."
        ],
        [
          'The second voice came on "This is Bob. I`m at the NorthWest A-Frames, heading East to the Garden."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the North plot of the Garden",
          id: { part: "wander_2", area: "gardenN", time: "2" }
        },
        {
          text: "(S) I walked to the South plot of the Garden",
          id: { part: "wander_2", area: "gardenS", time: "2" }
        }
      ]
    },
    "2": {
      text: [
        [
          "  I stood in the North plot of the Garden. Thick forest rimmed the North, East and West sides."
        ],
        ["I could see a flashlight beam in the South plot of the Garden."],
        ["The Walkie-Talkie crackled:"],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the North plot of the Garden",
          id: { part: "wander_2", area: "gardenN", time: "3" }
        },
        {
          text: "(S) I walked to the South plot of the Garden",
          id: { part: "wander_2", area: "gardenS", time: "3" }
        }
      ]
    },
    "3": {
      text: [
        [
          "I stood in the North plot of the Garden. Thick forest rimmed the North, East and West sides."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the North-East A-frames. Heading South-West to the Path."'
        ],
        [
          'The second voice came on "This is Bob. I`m at Sep`s place. Heading South-West back to the Meditation Hall."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the North plot of the Garden",
          id: { part: "wander_2", area: "gardenN", time: "4" }
        },
        {
          text: "(S) I walked to the South plot of the Garden",
          id: { part: "wander_2", area: "gardenS", time: "4" }
        }
      ]
    },
    "4": {
      text: [
        [
          "I stood in the North plot of the Garden. Thick forest rimmed the North, East and West sides."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the Path West of the Shrine. Heading North to the School."'
        ][
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the North plot of the Garden",
          id: { part: "wander_2", area: "gardenN", time: "1" }
        },
        {
          text: "(S) I walked to the South plot of the Garden",
          id: { part: "wander_2", area: "gardenS", time: "1" }
        }
      ]
    }
  }
};
