import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { story_json } from "../story_material/story.js";
import cookieCutter from "cookie-cutter";
import home_button from "../components/home_button.js";

export default function Story() {
  const router = useRouter();

  var [selectLock, setSelectLock] = useState(true);
  var [currentPart, setCurrentPart] = useState(null);
  var [currentSubPart, setCurrentSubPart] = useState(null);
  var [readThroughNumber, setReadThroughNumber] = useState(null);
  var [textVisible, setTextVisible] = useState(true);
  var [displayChoices, setDisplayChoices] = useState(null);

  var [seenForest, setSeenForest] = useState(false);
  var [seenOrchard, setSeenOrchard] = useState(false);
  var [seenGarden, setSeenGarden] = useState(false);
  var [seenSettlement, setSeenSettlement] = useState(false);

  var [sculptor, setSculptor] = useState(null);
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

  //Resets the state and cookies at the end of a read through.
  function entropy() {
    if (readThroughNumber < 3) {
      cookieCutter.set("readThroughNumber", readThroughNumber + 1);
    } else {
      cookieCutter.set("readThroughNumber", 0);
    }
    cookieCutter.set("part", "0");
    cookieCutter.set("subPart", "a");
  }

  //Various effects run during certain choices.
  function enactEffect(effects) {
    if (effects) {
      let effectArray = effects.split(",");
      effectArray.forEach(function(effect) {
        switch (effect) {
          case "trustUp":
            setTrust(trust + 1);
            break;
          case "trustDown":
            setTrust(trust - 1);
            break;
          case "courageUp":
            setCourage(courage + 1);
            break;
          case "courageDown":
            setCourage(courage - 1);
            break;
          case "insanityUp":
            setInsanity(insanity + 1);
            break;
          case "insanityDown":
            setInsanity(insanity - 1);
            break;
          case "seenForest":
            setSeenForest(true);
            break;
          case "seenOrchard":
            setSeenOrchard(true);
            break;
          case "seenGarden":
            setSeenGarden(true);
            break;
          case "seenSettlement":
            setSeenSettlement(true);
            break;
          case "sculptorTrue":
            setSculptor(true);
            break;
          case "sculptorFalse":
            setSculptor(false);
            break;
        }
      });
    }
  }

  //Code to run when user clicks on a choice.
  function selectChoice(e) {
    setCurrentPart(e.target.dataset.part);
    setCurrentSubPart(e.target.dataset.sub);
    cookieCutter.set("part", e.target.dataset.part);
    cookieCutter.set("subPart", e.target.dataset.sub);

    enactEffect(e.target.dataset.effect);

    setTextArray(
      story_json[currentPart][readThroughNumber][currentSubPart].text
    );
    setChoices(
      story_json[currentPart][readThroughNumber][currentSubPart].choices
    );
    advanceLine();
    setTextArrayIndex(0);
    printText("");
  }

  function advanceText(text) {
    let newText = textArray[textArrayIndex][0].slice(0, text.length + 1);
    setShownText(newText);
  }

  //Prints each line one letter at a time with some semi-random timing.
  function printText(text) {
    if (textArray.length > 0) {
      if (textArrayIndex <= textArray.length) {
        if (text.length < textArray[textArrayIndex][0].length) {
          let jitter = 20 + Math.random() * 100;
          setTimeout(() => {
            advanceText(text);
          }, jitter);
          return true;
        } else if (textArrayIndex < textArray.length - 1) {
          setTimeout(() => {
            advanceLine();
          }, 500);
        } else if (currentPart === "ending") {
          setTextVisible(false);
          setTimeout(() => {
            entropy();
            router.push("/");
          }, 2500);
        }
      }
    }
  }

  //Advances the line at the end of line.
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

  //
  function checkActive(activeVal) {
    if (activeVal) {
      switch (activeVal) {
        case "orchard":
          return !seenOrchard;
          break;
        case "forest":
          return !seenForest;
          break;
        case "settlement":
          return !seenSettlement;
          break;
        case "garden":
          return !seenGarden;
          break;
        case "programmer":
          return !sculptor;
          break;
        case "sculptor":
          return sculptor;
          break;
        case "courageOverZero":
          return courage > 0;
          break;
        case "courageUnderTwo":
          return courage < 2;
          break;
        case "trustOverTwo":
          return trust > 2;
          break;
        case "trustUnderOne":
          return trust < 1;
          break;
        case "insanityEqualsZero":
          return insanity === 0;
          break;
        case "insanityOverZero":
          return insanity > 0;
          break;
        case "trustOverCourage":
          return trust - courage > 0;
          break;
        case "courageOverTrust":
          return courage - trust > 0;
          break;
      }
    } else {
      return true;
    }
  }

  //Adds a link to the map during wander section.
  function mapVisible() {
    if (currentPart && currentPart.match(/wander/)) {
      return "activeChoice";
    } else {
      return "invisible";
    }
  }

  //Iterates over the part's choices and only adds those that are active.
  function generateChoices() {
    var compiledChoices = [];
    choices.map(function(choice, index) {
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
            data-effect={choice.effect}
          >
            {choice.text}
          </div>
        );
      }
    });
    return compiledChoices;
  }

  //Checks the cookies for a saved place,
  //Puts a saved place into state if it exists,
  //Otherwise starts at part 0a
  useEffect(() => {
    if (cookieCutter.get("readThroughNumber")) {
      setReadThroughNumber(cookieCutter.get("readThroughNumber"));
    } else {
      setReadThroughNumber("0");
      cookieCutter.set("readThroughNumber", "0");
    }
    if (cookieCutter.get("part")) {
      setCurrentPart(cookieCutter.get("part"));
      setCurrentSubPart(cookieCutter.get("subPart"));
    } else {
      setCurrentPart("21");
      setCurrentSubPart("a");
    }
    setSelectLock(false);
  }, []);

  //Used to initiate text printing.
  useEffect(() => {
    printText(shownText);
  }, [textArray, shownText, currentPart]);

  // We only want to display the choices when the last character of the
  // last element of the text array has been printed.
  useEffect(() => {
    if (textArray[textArrayIndex]) {
      if (
        textArrayIndex < textArray.length - 1 ||
        shownText.length < textArray[textArrayIndex][0].length
      ) {
        setDisplayChoices(false);
      } else {
        setDisplayChoices(true);
      }
    }
  }, [shownText]);

  //Update textArray when part is changed.
  useEffect(() => {
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
  }, [currentPart, currentSubPart]);

  return (
    <>
      {home_button()}
      <Link href="/map">
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          key="start"
          className={mapVisible()}
        >
          Map
        </span>
      </Link>
      <div className={textVisible ? "text" : "hidden"}>
        <p className="textLine lastLine"> {shownText_4} </p>
        <p className="textLine lastLine"> {shownText_3} </p>
        <p className="textLine lastLine"> {shownText_2} </p>
        <p className="textLine lastLine"> {shownText_1} </p>
        <span className="displayCarat">> </span>
        <p className="textLine currentLine"> {shownText} </p>
      </div>
      <div className="choices">{displayChoices && generateChoices()}</div>
    </>
  );
}
