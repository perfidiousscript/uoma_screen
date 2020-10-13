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
  }
};
