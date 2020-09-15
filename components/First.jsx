import React, { useEffect, useState } from "react";
import { story_json } from "../story_material/story.js";

export default function First() {
  var [currentChoice, setChoice] = useState("0");

  var [shownText, setShownText] = useState("");
  var [shownText_1, setShownText_1] = useState("");
  var [shownText_2, setShownText_2] = useState("");
  var [textArrayIndex, setTextArrayIndex] = useState(0);

  function selectedBackground(e) {
    e.target.style.background = "chartreuse";
    e.target.style.color = "black";
  }

  function unselectedBackground(e) {
    e.target.style.background = "black";
    e.target.style.color = "chartreuse";
  }

  function selectChoice(e) {
    setChoice(e.target.dataset.choice);
    advanceLine();
    setTextArrayIndex(0);
    printText("");
  }

  function advanceText(text) {
    let newText = story_json[currentChoice].text[textArrayIndex][0].slice(
      0,
      text.length + 1
    );
    setShownText(newText);
  }

  function printText(text) {
    if (textArrayIndex <= story_json[currentChoice].text.length) {
      if (
        text.length < story_json[currentChoice].text[textArrayIndex][0].length
      ) {
        let jitter = 20 + Math.random() * 180;
        setTimeout(() => {
          advanceText(text);
        }, jitter);
      } else if (textArrayIndex < story_json[currentChoice].text.length - 1) {
        setTimeout(() => {
          advanceLine();
        }, 500);
      }
    }
  }

  function advanceLine() {
    setShownText_2(shownText_1);
    setShownText_1(shownText);
    setShownText("");
    if (textArrayIndex < story_json[currentChoice].text.length - 1) {
      let new_length = textArrayIndex + 1;
      setTextArrayIndex(new_length);
    }
  }

  function displayChoices() {
    if (story_json[currentChoice].text[textArrayIndex]) {
      if (
        textArrayIndex < story_json[currentChoice].text.length - 1 ||
        shownText.length <
          story_json[currentChoice].text[textArrayIndex][0].length
      ) {
        return { display: "none" };
      }
    }
  }

  function generateChoices() {
    let compiledChoice = [];
    story_json[currentChoice].choices.map(function(choice) {
      compiledChoice.push(
        <p
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          onClick={selectChoice}
          className="choice"
          data-choice={choice.id}
        >
          {choice.text}
        </p>
      );
    });
    return compiledChoice;
  }

  useEffect(() => {
    printText(shownText);
  }, [shownText]);

  return (
    <>
      <div className="text">
        <p className="lastLine_2"> {shownText_2} </p>
        <p className="lastLine_1"> {shownText_1} </p>
        <p className="currentLine"> {shownText}</p>
      </div>
      <div className="choices" style={displayChoices()}>
        {generateChoices()}
      </div>
    </>
  );
}
