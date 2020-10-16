import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { story_json } from "../story_material/story.js";
import cookieCutter from "cookie-cutter";

export default function Story() {
  var [selectLock, setSelectLock] = useState(false);
  var [currentPart, setCurrentPart] = useState("20");
  var [currentSubPart, setSubPart] = useState("b");
  var [readThroughNumber, setReadThroughNumber] = useState("0");

  var [occupation, setOccupation] = useState(null);
  var [courage, setCourage] = useState(0);
  var [insanity, setInsanity] = useState(0);
  var [trust, setTrust] = useState(0);

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

  function entropy() {
    if (readThroughNumber < 3) {
      cookieCutter.set("readThroughNumber", readThroughNumber + 1);
    } else {
      cookieCutter.set("readThroughNumber", 0);
    }
  }

  function enactEffect(effectType) {
    for (var i = 0; i++; i == effectType.length - 1) {
      switch (effectType[i]) {
        case "trustUp":
          setTrust(trust + 1);
          break;
        case "trustDown":
          setTrust(trust - 1);
          break;
        case "courageUp":
          setCourage(courage + 1);
          break;
        case "trustDown":
          setCourage(courage - 1);
          break;
        case "insanityUp":
          setInsanity(insanity + 1);
          break;
        case "trustDown":
          setInsanity(insanity - 1);
          break;
        case "entropy":
          entropy();
          break;
      }
    }
  }

  function selectChoice(e) {
    setSelectLock(true);

    setCurrentPart(e.target.dataset.part);
    setSubPart(e.target.dataset.sub);
    cookieCutter.set("part", e.target.dataset.part);
    cookieCutter.set("subPart", e.target.dataset.sub);

    enactEffect(e.target.dataset.effecttype);

    setTextArray(
      story_json[currentPart][readThroughNumber][currentSubPart].text
    );
    setChoices(
      story_json[currentPart][readThroughNumber][currentSubPart].choices
    );
    advanceLine();
    setTextArrayIndex(0);
    setSelectLock(false);
    printText("");
  }

  function advanceText(text) {
    let newText = textArray[textArrayIndex][0].slice(0, text.length + 1);
    setShownText(newText);
  }

  function printText(text) {
    if (textArray.length > 0) {
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

  function generateChoices() {
    var compiledChoices = [];
    var choicesArray = [];
    if (currentPart === "1") {
      choicesArray.push(choices[readThroughNumber]);
    } else {
      choicesArray = choices;
    }

    choicesArray.map(function(choice, index) {
      if (checkActive(choice.active)) {
        compiledChoices.push(
          <div
            onMouseEnter={selectedBackground}
            onMouseLeave={unselectedBackground}
            onClick={selectChoice}
            key={index}
            className="activeChoice"
            data-part={choice.id.part}
            data-sub={choice.id.sub}
            data-effecttype={choice.effectType}
          >
            {choice.text}
          </div>
        );
      } else {
        compiledChoices.push(
          <div key={choice.id} className="inActiveChoice">
            {choice.text}
          </div>
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
      cookieCutter.set("readThroughNumber", "0");
    }
    if (cookieCutter.get("part")) {
      setCurrentPart(cookieCutter.get("part"));
    }
  }

  useEffect(() => {
    checkCookies();
  }, []);

  useEffect(() => {
    printText(shownText);
  }, [textArray, shownText]);

  useEffect(
    () => {
      if (!selectLock) {
        console.log("currentPart:", currentPart);
        console.log("readThroughNumber:", readThroughNumber);
        console.log("currentSubPart:", currentSubPart);
        setTextArray(
          story_json[currentPart][readThroughNumber][currentSubPart].text
        );
        setChoices(
          story_json[currentPart][readThroughNumber][currentSubPart].choices
        );
      }
    },
    [currentPart],
    [currentSubPart]
  );

  return (
    <>
      <Link href="/map">
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          key="start"
          className="activeChoice"
        >
          Map
        </span>
      </Link>
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
