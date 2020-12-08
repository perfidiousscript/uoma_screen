export const nineteen = {
  "0": {
    outer: {
      text: [
        [
          "I stepped into the shrine, closing the door behind me as softly as possible."
        ],
        ["I found myself in an entry corridor."],
        [
          "Though there were no sources of light that I could discern the interior of the shrine was bathed in a soft glow."
        ],
        [
          "I could just make out that the interior walls were composed of the same black stone found on the exterior."
        ],
        [
          "The space seemed seemed somehow larger within than the exterior would suggest."
        ],
        [
          "Within the outer structure was a arched doorway to an inner structure."
        ]
      ],
      choices: [
        {
          text: ["I went through the doorway into the inner room."],
          id: { part: "shrine", sub: "inner" }
        },
        {
          text: ["I stepped back outside, careful to close the door quietly."],
          id: { part: "wander_2", sub: "found" }
        }
      ]
    },
    inner: {
      text: [
        ["I stepped into the inner room of the shrine."],
        [
          "The glow grew stronger, just enough light too see the outlines of the room, but as in the outer room there was no apparent source of light."
        ],
        ["At the center of the room was a rough stone platform, a plinth."],
        [
          "There was clearly something there, some mass, covered over with a large piece of canvas or other rough spun, heavy material."
        ],
        [
          "It seemed as if the glow was emanating from the center of the room, from that mass, though how it passed through its covering was unclear to me."
        ],
        [
          "I had an off putting feeling about the whole thing, as if I should not be there."
        ]
      ],
      choices: [
        {
          text: ["I retreated to the outer chamber."],
          id: { part: "shrine", sub: "outer" }
        },
        {
          text: ["I removed the covering of the object."],
          id: { part: "end", sub: "b" },
          active: "insanityOverZero"
        },
        {
          text: ["I removed the covering of the object."],
          id: { part: "end", sub: "c" },
          active: "insanityEqualsZero"
        }
      ]
    }
  }
};
