const choice0 = [
  {
    text: ["I asked him what he had in mind."],
    id: { part: "12", sub: "a" },
    active: "sculptor"
  },
  {
    text: ["I asked him what he had in mind."],
    id: { part: "12", sub: "b" },
    active: "programmer"
  }
];

export const eleven = {
  "0": {
    a: {
      text: [
        ["Sep smiled."],
        [
          '"I`m very glad to hear it. Uoma was built with brilliant people like yourself in mind, to foster your mind and your work, to allow you to flourish."'
        ],
        ["I smiled too, took a sip of my beer."],
        ['"So now what?" I asked.'],
        [
          '"You simply continue on as you have, let us handle the rest. Ideally you will not notice any difference in your day to day. Ideally. Simply allow Uoma to take it`s course."'
        ],
        ["I smiled but felt somewhat at unease at this."],
        [
          '"This all leads me to something," he paused. "I have a task for you."'
        ]
      ],
      choices: choice0
    },
    b: {
      text: [
        ["Sep nodded gravely. He was obviously disappointed."],
        [
          '"I can`t say I blame you. I will say that Uoma was built specifically to foster the talents and abilities of brilliant minds. Mechanisms have been put into place to foster their work, and we can only control these mechanisms to a certain degree."'
        ],
        ["I wasn`t sure what to make of this."],
        ["Sep sat for a second, thinking then said."],
        ['"Nevertheless I have something-" He paused. "A task for you."']
      ],
      choices: choice0
    }
  }
};
