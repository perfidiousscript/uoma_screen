//a: Wondering about the shrine.
//b: Wondering about the intruder
//c: Gets rid of the papers.
//d: Gets rid of the clay studies.

export const twentyThree = {
  "0": {
    a: {
      text: [
        ["I couldn't stop thinking about the shrine and what might be inside."],
        ["I decided to go check it out again."],
        ["Whatever was going on there I wanted to figure out."],
        [
          "I stepped outside. The sky had grown overcase and a cold wind was blowing through."
        ],
        ["I walked over to the shrine, keeping my distance."],
        [
          "A truck passed by off in the distance, hauling in some supplies. I couldn't see who was inside."
        ],
        ["I sat down on a bench near the school and just looked."],
        [
          "The shrine seemed to suck up what little light was around into the black stone of its making."
        ],
        [
          "The handle, which had been destroyed last night, had already been replaced."
        ],
        [
          "The new handle was different from the other: new copper, shining in the light."
        ],
        [
          "It was only a matter of time before it was tarnished and grew dull like the last one."
        ],
        [
          "Something in me wondered so deeply. Forbidden places like this have always pulled my attention."
        ],
        [
          "And yet I knew that the mystery had to be an illusion. Forbidden places like this, and the myersty they held, always turned out to be nothing but mass delusion."
        ],
        ["The air of silence around it would not be broken easily."],
        ["It seemed clear that no one would tell me what went on it there."],
        ["I would have to figure it out by some other means."]
      ],
      choices: [
        {
          text: [
            "A group of kids came down the path toward me. I figured they might be more open to answering question."
          ],
          id: { part: "25", sub: "a" }
        }
      ]
    },
    b: {
      text: [
        [
          "I couldn't stop thinking about that man, that person...whatever it was that had approached shrine yesterday."
        ],
        [
          "That name that I had heard them use: 'Ash-Burner'. Was it some derogatory term?"
        ],
        [
          "Seeing his presence forgotten so quickly by those in Uoma, swept under the rug and denied left a bad taste in my mouth."
        ],
        [
          "If something this startling could be forgotton so quickly, I had to wonder what else could be going on here that is denied, hushed up and forgotten about."
        ],
        [
          "I had always been drawn to strange people, fascinated with them. Those people who seemed to be living in other realms, and shared this one only by their physical presence."
        ],
        [
          "I figured if I hung around and did some work I might be able to listen in on some conversations."
        ]
      ],
      choices: [
        {
          text: [
            "I decided to go up to the garden, help out there, and keep my ears open."
          ],
          id: { part: "25", sub: "b" }
        }
      ]
    },
    c: {
      text: [
        ["I gathered up all the papers, tried to stack them into a bundle."],
        [
          "Perhaps I should have felt bad for getting rid of Sep's work, but I didn't."
        ],
        ["I tried to think of the best place to get rid of them."]
      ],
      choices: [
        {
          text: ["It seemed best to just take them back to Sep."],
          id: { part: "25", sub: "c" }
        },
        {
          text: [
            "It seemed best to take the path out of Uoma and burn them there."
          ],
          id: { part: "25", sub: "d", active: "courageOverTrust" }
        },
        {
          text: [
            "It seemed best to take them to one of the burn piles out in the orchard and burn them there."
          ],
          id: { part: "25", sub: "e" }
        }
      ]
    },
    d: {
      text: [
        ["I moved all the sculptures in a wheelbarrow outside."],
        [
          "Perhaps I should have felt bad for getting rid of all this work, but I didn't"
        ],
        [
          "Not only did they appear mocking and grotesque, they seemed to symbolize all of my failure up to that point."
        ]
      ],
      choices: [
        {
          text: [
            "It seemed best to take them out on the path and drop them there"
          ],
          id: { part: "25", sub: "f" }
        },
        {
          text: [
            "It seemed best to take them back to Sep to see what he thought."
          ],
          id: { part: "25", sub: "g" }
        }
      ]
    }
  }
};
