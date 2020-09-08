import React, { useEffect, useState } from "react";

export default function First() {
  const [selectedChoice, setChoice] = useState(null);

  var [shownText, setShownText] = useState(" ");
  var [shownText_1, setShownText_1] = useState(" ");
  var [shownText_2, setShownText_2] = useState("");
  var [textArrayIndex, setTextArrayIndex] = useState(0);

  const textArray = [
    ["An Echo"],
    ["That’s what it is: an echo."],
    ["I’ll remember what I was, at some point."],
    ["It will come back to me."]
  ];

  function selectedBackground(e) {
    setChoice(e.target.dataset.choice);
    //e.target.style.border = "1px solid chartreuse";
    e.target.style.background = "chartreuse";
    e.target.style.color = "black";
  }

  function unselectedBackground(e) {
    setChoice(null);
    // e.target.style.border = "1px solid black";
    e.target.style.background = "black";
    e.target.style.color = "chartreuse";
  }

  function advanceText(text) {
    let newText = textArray[textArrayIndex][0].slice(0, text.length + 1);
    setShownText(newText);
  }

  function printText(text) {
    if (textArrayIndex < textArray.length) {
      if (text.length < textArray[textArrayIndex][0].length) {
        let jitter = 20 + Math.random() * 180;
        setTimeout(() => {
          advanceText(text);
        }, jitter);
      } else if (textArrayIndex < textArray.length) {
        setTimeout(() => {
          advanceLine();
        }, 300);
      }
    }
  }

  function advanceLine() {
    setShownText_2(shownText_1);
    setShownText_1(shownText);
    setShownText("");
    if (textArrayIndex < textArray.length) {
      setTextArrayIndex(textArrayIndex + 1);
    }
  }

  function displayChoices() {
    console.log("textArrayIndex", textArrayIndex);
    console.log("textArray.length", textArray.length);
    if (
      textArrayIndex !== textArray.length ||
      shownText.length < textArray[textArrayIndex][0].length
    ) {
      return { display: "none" };
    }
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
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          className="choice"
          data-choice="c1"
        >
          Choice 1
        </span>
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          className="choice"
          data-choice="c2"
        >
          Choice 2
        </span>
      </div>
    </>
  );
}
