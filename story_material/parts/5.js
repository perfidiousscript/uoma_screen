const choicePreArray = [
  {
    text: "We went to see the orchards next.",
    id: { part: 5, sub: "a" },
    active: "orchard",
    effect: "seenOrchard"
  },
  {
    text: "We went to see the forest next.",
    id: { part: 5, sub: "b" },
    active: "forest",
    effect: "seenForest"
  },
  {
    text: "We went to see the the garden next.",
    id: { part: 5, sub: "c" },
    active: "garden",
    effect: "seenGarden"
  },
  {
    text: "We went to see the settlement next.",
    id: { part: 5, sub: "d" },
    active: "settlement",
    effect: "seenSettlement"
  },
  {
    text: "I figured I had seen enough and we went to the dining hall",
    id: { part: 6, sub: "a" }
  }
];

export const five = {
  "0": {
    a: {
      text: [
        ["We walked over to the fruit orchards."],
        [
          "The limbs of the trees were sagging with hundreds of cherries, all perfectly ripe."
        ],
        ["Sep told me I could try them."],
        ["I plucked a handful right from the branch."],
        ["They were incredible, just bursting with juice."],
        ["There was an orchard hand there named Lyle,"],
        ["A kid, no more than nineteen."],
        ["He was ruddy, stringy-haired and smiled at us silently."],
        ["He was busy moving the irrigation lines."],
        ["It looked like hard work."],
        [
          "Sep said that when Lyle first arrived he had been mute, but he could talk now."
        ],
        ["The power of the people and the place had healed him."]
      ],
      choices: choicePreArray
    },
    b: {
      text: [
        [
          "We walked over through some of the forest along the boundary of Uoma."
        ],
        ["There were hundreds of birds singing around us."],
        [
          "The trees went up so high that their tops disappeared into a thick canopy."
        ],
        [
          "Sep said that loggers had never come through there, that some of the trees were hundreds of years old, and that it was up to them to protect it for posterity."
        ],
        ["They only took the oldest trees and left the rest."],
        [
          "There was a logger there named James, he was tall and tan and we watched from a distance as he felled a tree."
        ],
        [
          "Sep said that James had been in a logging accident and had not been able to walk,"
        ],
        ["but that being at Uoma had healed him."],
        ["The power of the place and the people had healed him."]
      ],
      choices: choicePreArray
    },
    c: {
      text: [
        ["There was a garden on the North side of Uoma."],
        ["About ten acres, surrounded by new deer fencing."],
        ["Already the marigolds and sunflowers had started to bloom."],
        ["I reached down and ran some of the soil through my fingers,"],
        ["it was midnight black and smelled fantastic."],
        ["They were growing vegetables of all kinds:"],
        [
          "greens, root vegetables, peppers, squash and they had set up domes for tomatoes."
        ],
        ["Plus chickens, goats and pigs."],
        [
          "Sep said that all of the food waste and human waste went back into feeding the garden,"
        ],
        [
          "and that in a few years they would be able to grow all of their food there."
        ],
        ["Soon enough all of Uoma would be a closed loop."]
      ],
      choices: choicePreArray
    },
    d: {}
  }
};
