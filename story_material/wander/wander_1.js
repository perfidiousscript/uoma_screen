export const wander_1 = {
  "0": {
    studio: {
      text: [
        ["I stood outside of my workspace."],
        [
          "It was just a little shed that Sep had set aside so I could delve into my work."
        ],
        ["It was a beautiful spring day, sunlight washing over the valley."]
      ],
      choices: [
        {
          text: "(S) I walked to my A-frame.",
          id: { part: "wander_1", sub: "aFrameNar" }
        },
        {
          text: "(E) I walked to the Garden.",
          id: { part: "wander_1", sub: "gardenS" }
        }
      ]
    },
    aFrameNar: {
      text: [
        ["My A Frame was a tidy little affair, exactly like all the others."],
        [
          "Made of wood, one story, no more than 300 square feet, but it was my own."
        ],
        ["To the West was thick forest and the steep wall of the valley."]
      ],
      choices: [
        {
          text: "(N) I walked to my studio.",
          id: { part: "wander_1", sub: "studio" }
        },
        {
          text: "(S) I walked to the school.",
          id: { part: "wander_1", sub: "school" }
        },
        {
          text: "(E) I walked to Sep's lodgings.",
          id: { part: "wander_1", sub: "seps" }
        }
      ]
    },
    gardenS: {
      text: [
        ["The South Plot of the Garden."],
        ["The smell of soil was rich in the air."],
        ["The plants had already grown visibly since I first arrived."],
        [
          "About a dozen people were working: pulling weeds, tilling and planting."
        ],
        [
          "I had met a few of them, but could not remember their names, and it seemed best to leave them to their work."
        ],
        ["Someone was running the tractor in the plot just to the North."],
        [
          "I felt a little guilty, after all they were making food and what was I doing to help the settlement?"
        ],
        [
          "But Sep had given me my task, and had told me to focus on that and that alone."
        ]
      ],
      choices: [
        {
          text: "(N) I walked to the North plot of the Garden.",
          id: { part: "wander_1", sub: "gardenN" }
        },
        {
          text: "(S) I walked South, to Sep's lodgings.",
          id: { part: "wander_1", sub: "seps" }
        },
        {
          text: "(E) I walked to my studio.",
          id: { part: "wander_1", sub: "studio" }
        }
      ]
    },
    gardenN: {
      text: [
        [
          "The North plot had not yed been planted, great piles of recently cleared brush lay in piles along the plot`s edge."
        ],
        [
          "The plot was surrounded on the North, East and West by that thick wall of forest that rose like a wall."
        ],
        [
          "Lyle was there by an old orange tractor running at an idle. He was checking some wingnuts on the body of a mower connected to it."
        ],
        ["I came over and waved."],
        [
          "Lyle nodded. I had to wonder if he was still shy to talk after years of being mute."
        ],
        ['I said "Hello," loudly over the noise of the tractor.'],
        ['"What`s up?" Lyle turned to me and pulled his gloves off.'],
        ['"What are you going to plant here?"'],
        ['"Was thinking potatoes. For the winter."'],
        ["I nodded."],
        ['"It`s really amazing," I said.'],
        ['Lyle turned to me. "What is?"'],
        ['"What happened here. With you."'],
        ['Lyle looked confused, "I don`t know what you`re talking about."'],
        [
          '"Being mute," I said, suddenly embarrassed, "Then coming here- Getting cured."'
        ],
        [
          'Lyle frowned, "Never been mute as far as I can remember. Who told you that?"'
        ],
        ['I hesitated, then said, "Sep."'],
        ["Lyle nodded,"],
        [
          '"Figures. He likes to talk Uoma up to new folks, get `em all dazzled so that they stick around.'
        ],
        ["I wouldn`t take anything he says too seriously."]
      ],
      choices: [
        {
          text: "(S) I walked to the South plot of the Garden",
          id: { part: "wander_1", sub: "gardenS" }
        }
      ]
    },
    seps: {
      text: [
        ["I walked past Sep`s lodgings."],
        [
          "The building stuck out from the others: far larger and more elaborate."
        ],
        [
          "The some was empty, Sep was probably out seeing to some work in the settlement."
        ]
      ],
      choices: [
        {
          text: "(N) I walked to the Garden.",
          id: { part: "wander_1", sub: "gardenS" }
        },
        {
          text: "(S) I walked to the Shrine.",
          id: { part: "wander_1", sub: "shrine" }
        },
        {
          text: "(W) I walked to the North West A-frames.",
          id: { part: "wander_1", sub: "aFrameNW" }
        },
        {
          text: "(E) I walked to my A-frame.",
          id: { part: "wander_1", sub: "aFrameNar" }
        }
      ]
    },
    aFrameNW: {
      text: [
        [
          "I walked to the group of A-frames in the Northwest part of Uoma, bordered to the North and West by a steep, forested slope."
        ],
        ["With everyone out working the A-Frames were quiet."],
        [
          "I realized that the settlement was in a kind of bowl, whose only entrance-and exit-was the gate to the south."
        ]
      ],
      choices: [
        {
          text: "(E) I walked to Seps lodgings.",
          id: { part: "wander_1", sub: "seps" }
        },
        {
          text: "(S) I walked to the Meditation Hall",
          id: { part: "wander_1", sub: "meditation" }
        }
      ]
    },
    shrine: {
      text: [
        ["The Shrine."],
        ["I had only ever seen things like it in my dreams."],
        [
          "It was situated in the middle of a large square at the center of Uoma easily the largest building in the seetlement."
        ],
        [
          "It was composed of black stone. Up close I found that it was porous and craggy like the kind you see near volcanoes."
        ],
        ["The seams between the blocks were nearly imperceptible."],
        [
          "Stairways on the East and West sides of the Shrine led up to pairs of doors."
        ],
        [
          "At the top center of the shrine was a massive pinnacle of some bright metal--likely nickle or chrome, though it shone like silver."
        ],
        [
          "The place thrummed with an energy, some vibration thousands of octaves below the realm of hearing, one that I felt in my tendons and cavities."
        ],
        [
          "I had no notion of what went on there, or what the shrine might hold inside."
        ]
      ],
      choices: [
        {
          text: "(E) I walked to Seps lodgings.",
          id: { part: "wander_1", sub: "seps" }
        },
        {
          text: "(S) I walked to the Meditation Hall",
          id: { part: "wander_1", sub: "meditation" }
        }
      ]
    },
    meditation: {
      text: [
        [
          "I walked to the meditation hall, a large cedar building in what I imagine was built with the Japanese style in mind."
        ],
        [
          "The large front double doors stood open, letting the warm air outside flow in."
        ],
        ["Sandalwood incense wafted out."],
        ["That impenetrable forest rose up to the West."],
        [
          "Formal meditation only happened in the mornings and evenings, though people would file in through the day for sit for a few minutes when they had the chance."
        ],
        [
          "There were a few people inside now, sitting quietly in full lotus or half lotus."
        ],
        ["To me, sitting was just sitting."],
        [
          "It was relaxing, but I never had any break throughs, never experienced anything beyond the ordinary."
        ],
        ["I envied those who gained something from it."]
      ],
      choices: [
        {
          text: "(N) I walked to the Northwest A-frames",
          id: { part: "wander_1", sub: "aFrameNW" }
        },
        {
          text: "(S) I walked to the Path.",
          id: { part: "wander_1", sub: "path" }
        },
        {
          text: "(E) I walked to the Shrine.",
          id: { part: "wander_1", sub: "shrine" }
        }
      ]
    },
    shrine: {
      text: [
        [
          "The school was a two story cinderblock building, whitewashed, with large windows reinforced with wire. "
        ],
        [
          "Some ten or twelve children were inside listening attentively to the teacher, Erin, a woman I had met in passing."
        ],

        [
          "Though the children here lived with thier parents the task of raising them was a group effort."
        ],
        [
          "There were lessons every day, but they were free to come and go as they pleased."
        ],
        [
          "It was not uncommon to see a child spending a day out planting in the fields or learning to mend a fence."
        ],
        [
          "I had to wonder what it was like to grow up in a place like this, so calm, but so cut off from the world."
        ],
        ["A childhood so different from my."]
      ],
      choices: [
        {
          text: "(N) I walked to my A-frame",
          id: { part: "wander_1", sub: "aFrameNar" }
        },
        {
          text: "(S) I walked to the Path ",
          id: { part: "wander_1", sub: "path" }
        },
        {
          text: "(E) I walked to the group of A-frames to the East.",
          id: { part: "wander_1", sub: "aFrameNE" }
        },
        {
          text: "(W) I walked to the Shrine",
          id: { part: "wander_1", sub: "shrine" }
        }
      ]
    },
    aFrameNE: {
      text: [
        ["I walked to the group of A-Frames on the North East Edge of Uoma."],
        [
          "Everyone was out in the orchards or the fields and there was no one around."
        ],
        [
          "To the east was a wide open, grassy plain through with the Path meandered until it disappeared into a crevice in the hills."
        ]
      ],
      choices: [
        {
          text: "(W) I walked to the school",
          id: { part: "wander_1", sub: "school" }
        },
        {
          text: "(W) I walked to the Shrine",
          id: { part: "wander_1", sub: "shrine" }
        }
      ]
    },
    path: {
      text: [
        ["I walked to the Path. "],
        [
          "It stood out in Uoma: clearly older than anything else in the settlement."
        ],
        [
          "It was no wider than a cart, tan dirt with grass growing up on either side."
        ],
        [
          "The Path terminated in one direction at one of the two entrances to the shrine."
        ],
        [
          "In the other direction the Path went through the heart of Uoma, cleaving the settlement in half until--at the border of Uoma--the Path passed out into a field and up into a canyon in the hills."
        ],
        [
          "I noticed then that there was a man walking up the Path from outside."
        ],
        [
          "He was stooped, shuffling, dressed strangely: barefoot with a rough woolen cloak pulled around him."
        ],
        [
          "As he came closer I saw that his face and hands were covered in some stuff--streaky, white and black--as if he had been diffing around in ash and soot."
        ],
        [
          "He passed by without acknowledging me, shuffling in that strange way, his eyes darting about."
        ],
        [
          "I couldn`t tell his age, he might have as easily been twenty years old and aged horribly by drugs or alcohol, or seventy."
        ],
        ["He stopped, stooped and picked up a rock from beside the Path."],
        [
          'Speaking directly at the rock, he said, "Which way? Which way!" He spoke strangely too, as if his mouth was filled with somthing, of as if he had not spoken for a long time.'
        ][
          "He continued along the path toward the shrine, carrying the rock absently, like a child`s doll."
        ],
        [
          '"Oh Shit." I looked over to see James, the logger, standing nearby. He was on edge.'
        ],
        ['"Where did he come from?" '],
        ['"I donno," I said, "down the path I guess?"'][
          '"I`ve got to go find Sep. Make sure he doesn`t break into the Shrine."'
        ],
        ["James took a few steps away then turned to me."],
        [
          '"Don`t look into its eyes--his eyes, and and don`t let him touch you."'
        ]["James set off at a jog and disappeared behind an A-frame."],
        ["I followed the man."],
        [
          "He continued to stagger forward in that off kilter way, looking around at the sky then back toward the ground."
        ],
        ["He held up the rock again, squinting at it."],
        [
          "At least it seemed to be a rock, perhaps it was nothing more than a clump of dirt, as it crumbled in his hand into a fine powder which fell to the earth."
        ]['"Excuse me can I help you with something?"'],
        [
          "He didn`t turn when I spoke, didn`t respond to my presence at all, just continued plodding along the path toward the shrine as if pulled toward it by some force."
        ]
      ],
      choices: [
        {
          text: "I moved around between the man and the shrine.",
          id: { part: "16", sub: "a", active: "courageOverZero" }
        },
        {
          text: "(W) I walked to the Shrine",
          id: { part: "16", sub: "b", active: "courageUnderTwo" }
        }
      ]
    }
  }
};
