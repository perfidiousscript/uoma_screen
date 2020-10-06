import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { story_json } from "../story_material/story.js";
import cookieCutter from "cookie-cutter";

export default function Story() {
  var [currentPart, setPart] = useState("0");
  var [readThroughNumber, setReadThroughNumber] = useState(null);
  var [currentPosition, setCurrentPosition] = useState(null);
  var [occupation, setOccupation] = useState(null);
  var [courage, setCourage] = useState(0);
  var [insanity, setInsanity] = useState(0);

  // var [anEffect, setAnEffect] = useState(false);
  // var [anotherEffect, setAnotherEffect] = useState(false);
  var [shownText, setShownText] = useState("");
  var [shownText_1, setShownText_1] = useState("");
  var [shownText_2, setShownText_2] = useState("");
  var [shownText_3, setShownText_3] = useState("");
  var [shownText_4, setShownText_4] = useState("");
  var [textArrayIndex, setTextArrayIndex] = useState(0);

  function selectedBackground(e) {
    e.target.style.background = "chartreuse";
    e.target.style.color = "black";
  }

  function unselectedBackground(e) {
    e.target.style.background = "black";
    e.target.style.color = "chartreuse";
  }

  function enactEffect(effectType, effectChange) {
    // if (effectType === "a") {
    //   setAnEffect(effectChange);
    // }
  }

  function selectChoice(e) {
    setPart(e.target.dataset.choice);
    enactEffect(e.target.dataset.effecttype, e.target.dataset.effectchange);
    advanceLine();
    setTextArrayIndex(0);
    if (currentPart === "wander") {
      setCurrentPosition(story_json[currentPart][readThroughNumber][location]);
    } else {
      setCurrentPosition(story_json[currentPart][readThroughNumber]);
    }
    printText("");
  }

  function advanceText(text) {
    let newText = story_json[currentPart][readThroughNumber].text[
      textArrayIndex
    ][0].slice(0, text.length + 1);
    setShownText(newText);
  }

  function storyPosition() {
    if (currentPart === "wander") {
      story_json[currentPart][readThroughNumber][location];
    } else {
      story_json[currentPart][readThroughNumber];
    }
  }

  function printText(text) {
    if (
      textArrayIndex <= story_json[currentPart][readThroughNumber].text.length
    ) {
      if (
        text.length <
        story_json[currentPart][readThroughNumber].text[textArrayIndex][0]
          .length
      ) {
        let jitter = 20 + Math.random() * 100;
        setTimeout(() => {
          advanceText(text);
        }, jitter);
      } else if (
        textArrayIndex <
        story_json[currentPart][readThroughNumber].text.length - 1
      ) {
        setTimeout(() => {
          advanceLine();
        }, 500);
      }
    }
  }

  function advanceLine() {
    setShownText_4(shownText_3);
    setShownText_3(shownText_2);
    setShownText_2(shownText_1);
    setShownText_1(shownText);
    setShownText("");
    if (
      textArrayIndex <
      story_json[currentPart][readThroughNumber].text.length - 1
    ) {
      let new_length = textArrayIndex + 1;
      setTextArrayIndex(new_length);
    }
  }

  function displayChoices() {
    if (story_json[currentPart][readThroughNumber].text[textArrayIndex]) {
      if (
        textArrayIndex <
          story_json[currentPart][readThroughNumber].text.length - 1 ||
        shownText.length <
          story_json[currentPart][readThroughNumber].text[textArrayIndex][0]
            .length
      ) {
        return { display: "none" };
      }
    }
  }

  function generateChoices() {
    var compiledChoices = [];
    var choicesArray = [];
    if (currentPart === "1") {
      choicesArray.push(
        story_json[currentPart][readThroughNumber].choices[readThroughNumber]
      );
    } else {
      choicesArray = story_json[currentPart][readThroughNumber].choices;
    }

    function checkActive(activeHash) {
      if (activeHash) {
        if (activeHash.variable === "insanity") {
          if (activeHash.type === "gt") {
            insanity >= activeHash.value;
          }
        }
      } else {
        return true;
      }
    }

    choicesArray.map(function(choice) {
      if (checkActive(choice.active)) {
        compiledChoices.push(
          <p
            onMouseEnter={selectedBackground}
            onMouseLeave={unselectedBackground}
            onClick={selectChoice}
            key={choice.id}
            className="activeChoice"
            data-choice={choice.id}
            data-effecttype={choice.effectType}
            data-effectchange={choice.effectChange}
          >
            {choice.text}
          </p>
        );
      } else {
        compiledChoices.push(
          <p
            key={choice.id}
            className="inActiveChoice"
            data-choice={choice.id}
            data-effecttype={choice.effectType}
            data-effectchange={choice.effectChange}
          >
            {choice.text}
          </p>
        );
      }
    });
    return compiledChoices;
  }

  function checkCookies() {
    if (cookieCutter.get("readThroughNumber")) {
      setReadThroughNumber(cookieCutter.get("readThroughNumber"));
    } else {
      setReadThroughNumber(0);
      cookieCutter.set("readThroughNumber", 0);
    }
  }

  useEffect(() => {
    checkCookies();
  }, [readThroughNumber]);

  useEffect(() => {
    readThroughNumber && printText(shownText);
  }, [readThroughNumber, shownText]);

  return (
    <>
      <div className="text">
        <p className="textLine lastLine"> {shownText_4} </p>
        <p className="textLine lastLine"> {shownText_3} </p>
        <p className="textLine lastLine"> {shownText_2} </p>
        <p className="textLine lastLine"> {shownText_1} </p>
        <span className="displayCarat">> </span>
        <p className="textLine currentLine"> {shownText} </p>
      </div>
      <div className="choices" style={readThroughNumber && displayChoices()}>
        {readThroughNumber && generateChoices()}
      </div>
    </>
  );
}
