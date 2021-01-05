//a: Meeting with Sep, low trust
//b: Meeting with Sep, high trust.

export const twentyFour = {
  "0": {
    a: {
      text: [
        ["Sep gestured to the couch, and I sat"],
        ["'I really am busy right now so if we could make this quick.'"],
        ["I was taken aback at how terse he was."],
        [
          "'And I'm only interested in updates on your work, I don't have time to answer questions'"
        ],
        [
          "'Well Sep, the truth is that I don't feel like I ever got any resolution over the events that occured yesterday.'"
        ],
        ["'And I find it hard to work with all this hanging over my head.'"],
        [
          "'Well' Sep stood and opened the door, 'I thought you would be as asset here but -- as the events of the last day have shown -- apparently I was wrong."
        ],
        ["'You're welcome to do your work elsewhere.'"]
      ],
      choices: [
        {
          text: ["I left without saying another word."],
          id: { part: "25", sub: "j" }
        },
        {
          text: ["I said, 'But I do want to work here Sep.'"],
          id: { part: "25", sub: "k" }
        }
      ]
    },
    b: {
      text: [
        ["Sep gestured to a couch. and I sat"],
        [
          "The other woman looked put out for a second, then disappeared into one of the other rooms."
        ],
        ["'I'm glad you came by. How has the project been going?'"],
        [
          "'Well...Slowly, and, honestly, the events of yesterday have been weighing on my mind.'"
        ],
        ["Sep looked confused, 'Events?'"],
        ["'The events outside the shrine'"],
        [
          "'Ah yes yes. Of course.' He waved his hand rapidly as if I had brought up a troubling, but minor, event"
        ],
        [
          "'Sep I trust you, and I trust Uoma, but I can't help be feel that there is something going on here that hasn't been disclosed"
        ],
        [
          "I want to live here, I want to help out, but I want to know what I am getting into."
        ],
        [
          "Sep nodded. 'We are an open book here. What do you want to know about?'"
        ]
      ],
      choices: [
        {
          text: ["Who was that person that came here yesterday?"],
          id: { part: "25", sub: "h" }
        },
        {
          text: ["What goes on inside the shrine?"],
          id: { part: "25", sub: "i" }
        }
      ]
    }
  }
};
