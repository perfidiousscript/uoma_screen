import React, { useEffect, useState } from "react";

export default function First() {
  const [selectedChoice, setChoice] = useState(null);

  const [shownText, setShownText] = useState("");

  const lineText = "This is the line text okay?";

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
    let newText = lineText.slice(0, text.length + 1);
    setShownText(newText);
  }

  function printText(text) {
    if (text.length < lineText.length) {
      console.log(text);
      let jitter = 20 + Math.random() * 200;
      console.log(jitter);
      setTimeout(() => {
        advanceText(text);
      }, jitter);
    }
  }

  function displayChoices() {
    if (shownText.length < lineText.length) {
      return { display: "none" };
    }
  }

  useEffect(() => {
    printText(shownText);
  }, [shownText]);

  return (
    <>
      <div className="text">
        <p className="lastLine"> </p>
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
