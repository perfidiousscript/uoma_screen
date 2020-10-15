export const wander_2 = {
  studio: {
    "1": {
      text: [
        ["I was standing outside my workspace."],
        ["The Walkie-Talkie crackled:"],
        [
          "'This is James, I`m at the School now, heading North to their A-frame.'"
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
          id: { part: "found" }
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
        ["I could see the beam of James's flashlight over at my A-frame."],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
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
          'The second voice came on "This is Bob. I`m at Seps place, heading to the Meditation Hall."'
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
          id: { part: "found" }
        },
        {
          text: "(N) I walked to my studio.",
          id: { part: "wander_2", area: "studio", time: "2" }
        },
        { text: "(S) I walked to the school", id: { part: "found" } },
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
          id: { part: "wander_2", area: "aFrameNar", time: "4" }
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
        ],
        [
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside my A-Frame",
          id: { part: "wander_2", area: "aFrameNar", time: "1" }
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
    }
  },
  forest: {
    "1": {
      text: [
        ["I crouched just within the forest."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the NorthWest A-Frames, heading East to the Garden."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the forest.",
          id: { part: "wander_2", area: "forest", time: "2" }
        },
        {
          text: "(E) I walked over to my A-Frame.",
          id: { part: "found" }
        },
        {
          text: "(S) I walked to the North-East A-Frames.",
          id: { part: "wander_2", area: "aFrameNE", time: "2" }
        }
      ]
    },
    "2": {
      text: [
        ["I crouched just within the forest."],
        ["I could see James`s flashlight scanning over my A-frame."],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the forest.",
          id: { part: "wander_2", area: "forest", time: "3" }
        },
        {
          text: "(E) I walked over to my A-Frame.",
          id: { part: "found" }
        },
        {
          text: "(S) I walked to the North-East A-Frames.",
          id: { part: "found" }
        }
      ]
    },
    "3": {
      text: [
        ["I crouched just within the forest."],
        ["James appeared on the path and passed within feet of me."],
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
          text: "(C) I waited in the forest.",
          id: { part: "wander_2", area: "forest", time: "4" }
        },
        {
          text: "(E) I walked over to my A-Frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "4" }
        },
        {
          text: "(S) I walked to the North-East A-Frames.",
          id: { part: "wander_2", area: "aFrameNE", time: "4" }
        }
      ]
    },
    "4": {
      text: [
        ["I crouched just within the forest."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the Path East of the Shrine. Heading North to the School."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the forest.",
          id: { part: "wander_2", area: "forest", time: "1" }
        },
        {
          text: "(E) I walked over to my A-Frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "1" }
        },
        {
          text: "(S) I walked to the North-East A-Frames.",
          id: { part: "wander_2", area: "aFrameNE", time: "1" }
        }
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
          id: { part: "found" }
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
          text: "(E) I walked to my studio.",
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
          text: "(E) I walked to my studio.",
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
        ],
        [
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
  },
  seps: {
    "1": {
      text: [
        ["I was standing outside of Sep`s lodgings. "],
        ["The black, curving wall of the Shrine stood to the South. "],
        ["I would have to get to the East or West side to enter the Shrine."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the NorthWest A-Frames, heading East to the Garden."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside Sep's",
          id: { part: "wander_2", area: "seps", time: "2" }
        },
        {
          text: "(N) I walked to the Garden",
          id: { part: "wander_2", area: "gardenS", time: "2" }
        },
        {
          text: "(W) I walked to the North-West A-frames",
          id: { part: "wander_2", area: "aFrameNW", time: "2" }
        },
        {
          text: "(E) I walked to my A-frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "2" }
        }
      ]
    },
    "2": {
      text: [
        ["I was standing outside of Sep`s lodgings."],
        ["The black, curving wall of the Shrine stood to the South."],
        ["I would have to get to the East or West sides to enter the Shrine."],
        ["The Walkie-Talkie crackled:"],
        [
          "This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside Sep's",
          id: { part: "found" }
        },
        {
          text: "(N) I walked to the Garden",
          id: { part: "found" }
        },
        {
          text: "(W) I walked to the North-West A-frames",
          id: { part: "wander_2", area: "aFrameNW", time: "3" }
        },
        {
          text: "(E) I walked to my A-frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "3" }
        }
      ]
    },
    "4": {
      text: [
        ["I was standing outside of Sep`s lodgings."],
        ["The black, curving wall of the Shrine stood to the South."],
        ["I would have to get to the East or West sides to enter the Shrine."],
        ["The walkie-talkie crackled,"],
        [
          '"This is James. At the Path West of the Shrine. Heading North to the School."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside Sep's",
          id: { part: "wander_2", area: "seps", time: "1" }
        },
        {
          text: "(N) I walked to the Garden",
          id: { part: "wander_2", area: "gardenS", time: "1" }
        },
        {
          text: "(W) I walked to the North-West A-frames",
          id: { part: "found" }
        },
        {
          text: "(E) I walked to my A-frame.",
          id: { part: "wander_2", area: "aFrameNar", time: "1" }
        }
      ]
    }
  },
  aFrameNW: {
    "2": {
      text: [
        [
          "I stood within a group of A-frames, bordered on the North and West by a steep forested hill."
        ],
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
          text: "(C) I waited in the North-West A-Frames",
          id: { part: "wander_2", area: "aFrameNW", time: "3" }
        },
        {
          text: "(E) I walked to Seps lodgings",
          id: { part: "wander_2", area: "seps", time: "3" }
        },
        {
          text: "(S) I walked to the Meditation Hall",
          id: { part: "wander_2", area: "meditation", time: "3" }
        }
      ]
    },
    "3": {
      text: [
        [
          "I stood within a group of A-frames, bordered on the North and West by a steep forested hill."
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
          text: "(C) I waited in the North-West A-Frames",
          id: { part: "wander_2", area: "aFrameNW", time: "4" }
        },
        {
          text: "(E) I walked to Seps lodgings",
          id: { part: "wander_2", area: "seps", time: "4" }
        },
        {
          text: "(S) I walked to the Meditation Hall",
          id: { part: "wander_2", area: "meditation", time: "4" }
        }
      ]
    },
    "4": {
      text: [
        [
          "I stood within a group of A-frames, bordered on the North and West by a steep forested hill."
        ],
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
          text: "(C) I waited in the North-West A-Frames",
          id: { part: "found" }
        },
        {
          text: "(E) I walked to Seps lodgings",
          id: { part: "wander_2", area: "seps", time: "4" }
        },
        {
          text: "(S) I walked to the Meditation Hall",
          id: { part: "wander_2", area: "meditation", time: "4" }
        }
      ]
    }
  },
  meditation: {
    "1": {
      text: [
        [
          "I stood outside the meditation hall. The building was lit up and filled with people preparing for Sep's talk."
        ],
        ["The lights were on and I could see people packed inside."],
        ["I could see Bob`s flashlight scanning the A-Frames to the North."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the North-West A-Frames, heading East to the Garden."'
        ]
      ],
      choices: [
        {
          text: "(I) I went inside the Meditation Hall.",
          id: { part: "20", choice: "a" }
        },
        {
          text: "(C) I stayed outside the Meditation Hall",
          id: { part: "wander_2", area: "meditation", time: "2" }
        },
        {
          text: "(N) I walked to the North-West A-frames",
          id: { part: "wander_2", area: "aFrameNW", time: "2" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathShW", time: "0" }
        }
      ]
    },
    "2": {
      text: [
        [
          "I stood outside the meditation hall. The building was lit up and filled with people preparing for Sep's talk."
        ],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ]
      ],
      choices: [
        {
          text: "(I) I went inside the Meditation Hall.",
          id: { part: "20", choice: "a" }
        },
        {
          text: "(C) I stayed outside the Meditation Hall",
          id: { part: "wander_2", area: "meditation", time: "3" }
        },
        {
          text: "(N) I walked to the North-West A-frames",
          id: { part: "wander_2", area: "aFrameNW", time: "3" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathShW", time: "0" }
        }
      ]
    },
    "3": {
      text: [
        [
          "I stood outside the meditation hall. The building was lit up and filled with people preparing for Sep`s talk."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the North-East A-frames. Heading South-West to the Path."'
        ],
        [
          'The second voice came on "This is Bob. I`m at Sep`s place. Heading South-West back to the Meditation Hall."'
        ],
        [
          "I could see the beam of Bob`s flashlight in the distance coming toward me."
        ]
      ],
      choices: [
        {
          text: "(I) I went inside the Meditation Hall.",
          id: { part: "20", choice: "a" }
        },
        {
          text: "(C) I stayed outside the Meditation Hall",
          id: { part: "found" }
        },
        {
          text: "(N) I walked to the North-West A-frames",
          id: { part: "wander_2", area: "aFrameNW", time: "4" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathShW", time: "0" }
        }
      ]
    }
  },
  school: {
    "2": {
      text: [
        [
          "I was standing outside the School, a two story cinderblock building."
        ],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited outside the School",
          id: { part: "wander_2", area: "school", time: "3" }
        },
        {
          text: "(N) I walked to my A-frame",
          id: { part: "wander_2", area: "aFrameNar", time: "3" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathE", time: "3" }
        },
        {
          text: "(E) I walked to the North-East group of A-frames.",
          id: { part: "wander_2", area: "aFrmaeNE", time: "3" }
        }
      ]
    },
    "3": {
      text: [
        [
          "I was standing outside the School, a two story cinderblock building."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the North-East A-frames. Heading South-West to the Path."'
        ],
        [
          'The second voice came on "This is Bob. I`m at Sep`s place. Heading South-West back to the Meditation Hall."'
        ],
        ["I could see James` flashlight off in the distance to the South-East."]
      ],
      choices: [
        {
          text: "(C) I waited outside the School",
          id: { part: "wander_2", area: "school", time: "4" }
        },
        {
          text: "(N) I walked to my A-frame",
          id: { part: "wander_2", area: "aFrameNar", time: "4" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathE", time: "4" }
        },
        {
          text: "(E) I walked to the North-East group of A-frames.",
          id: { part: "wander_2", area: "aFrmaeNE", time: "4" }
        }
      ]
    },
    "4": {
      text: [
        [
          "I was standing outside the School, a two story cinderblock building."
        ],
        ["The walkie-talkie crackled,"],
        [
          '"This is James. At the Path West of the Shrine. Heading North to the School."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ],
        ["I could see James` flashlight just to the south, coming toward me."]
      ],
      choices: [
        {
          text: "(C) I waited outside the School",
          id: { part: "found" }
        },
        {
          text: "(N) I walked to my A-frame",
          id: { part: "wander_2", area: "aFrameNar", time: "1" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "found" }
        },
        {
          text: "(E) I walked to the North-East group of A-frames.",
          id: { part: "wander_2", area: "aFrmaeNE", time: "1" }
        }
      ]
    }
  },
  aFrameNE: {
    "1": {
      text: [
        [
          "I stood within the group of A-Frames on the North-East corner of Uoma."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the North-West A-Frames, heading East to the Garden."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the North-East A-Frames.",
          id: { part: "wander_2", area: "aFrameNE", time: "2" }
        },
        {
          text: "(N) I walked into the Forest",
          id: { part: "wander_2", area: "forest", time: "2" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathE", time: "2" }
        },
        {
          text: "((W) I walked to the school",
          id: { part: "wander_2", area: "school", time: "2" }
        }
      ]
    },
    "2": {
      text: [
        [
          "I stood within the group of A-Frames on the North-East corner of Uoma."
        ],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ],
        ["I could see James' flashlight just to the West, coming toward me."]
      ],
      choices: [
        {
          text: "(C) I waited in the North-East A-Frames.",
          id: { part: "found" }
        },
        {
          text: "(N) I walked into the Forest",
          id: { part: "wander_2", area: "forest", time: "3" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathE", time: "3" }
        },
        {
          text: "((W) I walked to the school",
          id: { part: "wander_2", area: "school", time: "3" }
        }
      ]
    },
    "4": {
      text: [
        [
          "I stood within the group of A-Frames on the North-East corner of Uoma."
        ],
        ["The walkie-talkie crackled:"],
        [
          "This is James. At the Path West of the Shrine. Heading North to the School."
        ],
        [
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited in the North-East A-Frames.",
          id: { part: "wander_2", area: "aFrameNE", time: "1" }
        },
        {
          text: "(N) I walked into the Forest",
          id: { part: "wander_2", area: "forest", time: "1" }
        },
        {
          text: "(S) I walked to the Path",
          id: { part: "wander_2", area: "pathE", time: "1" }
        },
        {
          text: "((W) I walked to the school",
          id: { part: "wander_2", area: "school", time: "1" }
        }
      ]
    }
  },
  pathE: {
    "1": {
      text: [
        ["I stood on the East part of the Path."],
        [
          "Just a short stretch of Path lay between me and the entrance to the Shrine."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the North-West A-Frames, heading East to the Garden."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited on the Path",
          id: { part: "wander_2", area: "pathE", time: "2" }
        },
        {
          text: "(N) I walked North to the North-East A-Frames.",
          id: { part: "wander_2", area: "aFrameNE", time: "2" }
        },
        {
          text: "(W) I walked on the Path toward the Shrine.",
          id: { part: "wander_2", area: "pathShE", time: "2" }
        }
      ]
    },
    "2": {
      text: [
        ["I stood on the East part of the Path."],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited on the Path",
          id: { part: "wander_2", area: "pathE", time: "3" }
        },
        {
          text: "(N) I walked North to the North-East A-Frames.",
          id: { part: "found" }
        },
        {
          text: "(W) I walked on the Path toward the Shrine.",
          id: { part: "wander_2", area: "pathShE", time: "3" }
        }
      ]
    },
    "3": {
      text: [
        ["I stood on the East part of the Path."],
        ["I could see a flashlight in the A-Frames just to the North."],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the North-East A-frames. Heading South-West toward the shrine on the Path."'
        ],
        [
          'The second voice came on "This is Bob. I`m at Sep`s place. Heading South-West back to the Meditation Hall."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited on the Path",
          id: { part: "wander_2", area: "pathE", time: "4" }
        },
        {
          text: "(N) I walked North to the North-East A-Frames.",
          id: { part: "found" }
        },
        {
          text: "(W) I walked on the Path toward the Shrine.",
          id: { part: "found" }
        }
      ]
    },
    "4": {
      text: [
        ["I stood on the East part of the Path."],
        [
          "I saw James walking out of the A-Frames onto the Path and I ducked out of view."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the Path just East of the Shrine. Heading North to the School."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Meditation Hall. Still no sign of them here. Heading North to the North-West A-frames."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited on the Path",
          id: { part: "wander_2", area: "pathE", time: "2" }
        },
        {
          text: "(N) I walked North to the North-East A-Frames.",
          id: { part: "wander_2", area: "aFrameNE", time: "2" }
        },
        {
          text: "(W) I walked on the Path toward the Shrine.",
          id: { part: "wander_2", area: "pathShE", time: "2" }
        }
      ]
    }
  },
  pathShE: {
    "1": {
      text: [
        [
          "I stood on the Path just East of the Shrine, the entrance within view."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. I`m at the School now. Heading North to their A-Frame."'
        ][
          'The second voice came on "This is Bob. I`m at the North-West A-Frames, heading East to the Garden."	'
        ]
      ],
      choices: [
        {
          text: "(C) I waited on the Path",
          id: { part: "wander_2", area: "pathShE", time: "2" }
        },
        {
          text: "(N) I walked North to the School",
          id: { part: "wander_2", area: "school", time: "2" }
        },
        {
          text: "(W) I went to the the Shrine.",
          id: { part: "shrine_1" }
        }
      ]
    },
    "2": {
      text: [
        [
          "I stood on the Path just East of the Shrine, the entrance within view."
        ],
        ["The Walkie-Talkie crackled: "],
        [
          '"This is James, No sign of them at their A-Frame. Heading to the North-East A-Frames now."'
        ],
        [
          'The second voice came on "This is Bob. I`m at the Garden now, heading South to Sep`s cabin."'
        ]
      ],
      choices: [
        {
          text: "(C) I waited on the Path",
          id: { part: "wander_2", area: "pathShE", time: "3" }
        },
        {
          text: "(N) I walked North to the School",
          id: { part: "wander_2", area: "school", time: "3" }
        },
        {
          text: "(W) I went to the the Shrine.",
          id: { part: "shrine_1" }
        }
      ]
    },
    "3": {
      text: [
        [
          "I stood on the Path just East of the Shrine, its entrance just within view."
        ],
        ["The walkie-talkie crackled:"],
        [
          '"This is James. At the North-East A-frames. Heading South-West to the Path."'
        ],
        [
          'The second voice came on "This is Bob. I`m at Sep`s place. Heading South-West back to the Meditation Hall."'
        ],
        ["A flashlight beam was coming out of the A-Frames toward me."]
      ],
      choices: [
        {
          text: "(C) I waited on the Path",
          id: { part: "wander_2", area: "pathShE", time: "found" }
        },
        {
          text: "(N) I walked North to the School",
          id: { part: "wander_2", area: "school", time: "4" }
        },
        {
          text: "(W) I went to the the Shrine.",
          id: { part: "shrine_1" }
        }
      ]
    }
  },
  pathShW: {
    "0": {
      text: [
        ["I stood on the Path just West of the Shrine."],
        ["Its entrance just within view."],
        ["With no one around I could easily slip in and check it out."]
      ],
      choices: [
        {
          text: "(C) I stayed to the Path",
          id: { part: "wander_2", area: "pathShW", time: "0" }
        },
        {
          text: "(N) I went to the Meditation Hall.",
          id: { part: "wander_2", area: "meditation", time: "1" }
        },
        {
          text: "(E) I went to the the Shrine.",
          id: { part: "shrine_1" }
        }
      ]
    }
  }
};

export const found = {
  "0": {
    text: [
      ["A flashlight beam came into view."],
      ['"You heading to Sep`s talk?"'],
      ['"Yeah."I said, embarassed.'],
      ['"Found `em," He said into the walkie-talkie,'],
      ['"We`re Heading over to the Meditation hall now."']
    ],
    choices: [
      {
        text:
          "I walked over to the Meditation Hall. Being followed, I had no other choice.",
        id: { part: "20a", effectType: "trustDown" }
      }
    ]
  }
};
