import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { story_json } from "../story_material/story.js";
import cookieCutter from "cookie-cutter";

export default function Story() {
  var [currentPart, setPart] = useState("wander_2");
  var [area, setArea] = useState("studio");
  var [time, setTime] = useState(1);
  var [readThroughNumber, setReadThroughNumber] = useState(null);
  var [currentPosition, setCurrentPosition] = useState(null);
  var [occupation, setOccupation] = useState(null);
  var [courage, setCourage] = useState(0);
  var [insanity, setInsanity] = useState(0);

  // var [anEffect, setAnEffect] = useState(false);
  // var [anotherEffect, setAnotherEffect] = useState(false);
  var [textArray, setTextArray] = useState([]);
  var [choices, setChoices] = useState([]);
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
    setPart(e.target.dataset.part);
    if (currentPart.match(/wander/)) {
      setArea(e.target.dataset.area);
      setTime(e.target.dataset.time);
    }
    enactEffect(e.target.dataset.effecttype, e.target.dataset.effectchange);
    if (currentPart.match(/wander/)) {
      setCurrentPosition(story_json[currentPart][area][time]);
    } else {
      setCurrentPosition(story_json[currentPart][readThroughNumber]);
    }
    console.log();
    setTextArray(currentPosition.text);
    setChoices(currentPosition.choices);
    advanceLine();
    setTextArrayIndex(0);
    printText("");
  }

  function advanceText(text) {
    let newText = textArray[textArrayIndex][0].slice(0, text.length + 1);
    setShownText(newText);
  }

  function storyPosition() {
    if (currentPart === "wander") {
      story_json[currentPart][readThroughNumber][area];
    } else {
      story_json[currentPart][readThroughNumber];
    }
  }

  function printText(text) {
    if (textArrayIndex <= textArray.length) {
      if (text.length < textArray[textArrayIndex][0].length) {
        let jitter = 20 + Math.random() * 100;
        setTimeout(() => {
          advanceText(text);
        }, jitter);
      } else if (textArrayIndex < textArray.length - 1) {
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
    if (textArrayIndex < textArray.length - 1) {
      let new_length = textArrayIndex + 1;
      setTextArrayIndex(new_length);
    }
  }

  function displayChoices() {
    if (textArray[textArrayIndex]) {
      if (
        textArrayIndex < textArray.length - 1 ||
        shownText.length < textArray[textArrayIndex][0].length
      ) {
        return { display: "none" };
      }
    }
  }

  function generateChoices() {
    var compiledChoices = [];
    var choicesArray = [];
    if (currentPart === "1") {
      choicesArray.push(choices[readThroughNumber]);
    } else {
      choicesArray = choices;
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
            key={choice.id.part + choice.id.area}
            className="activeChoice"
            data-part={choice.id.part}
            data-area={choice.id.area}
            data-time={choice.id.time}
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
            data-part={choice.id.part}
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
    if (currentPart.match(/wander/)) {
      setCurrentPosition(story_json[currentPart][area][time]);
      setTextArray(story_json[currentPart][area][time].text);
      setChoices(story_json[currentPart][area][time].choices);
    } else {
      setCurrentPosition(story_json[currentPart][readThroughNumber]);
      setTextArray(story_json[currentPart][readThroughNumber].text);
      setChoices(story_json[currentPart][readThroughNumber].choices);
    }
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
