import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { story_json } from "../story_material/story.js";

export default function Home() {
  var [currentChoice, setChoice] = useState("0");
  var [readThroughNumber, setReadThroughNumber] = useState(0);

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
    setChoice(e.target.dataset.choice);
    enactEffect(e.target.dataset.effecttype, e.target.dataset.effectchange);
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
        let jitter = 20 + Math.random() * 100;
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
    setShownText_4(shownText_3);
    setShownText_3(shownText_2);
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
    var compiledChoice = [];
    var choicesArray = [];
    if (currentChoice === "1") {
      choicesArray.push(story_json[currentChoice].choices[readThroughNumber]);
    } else {
      choicesArray = story_json[currentChoice].choices;
    }

    choicesArray.map(function(choice) {
      compiledChoice.push(
        <p
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          onClick={selectChoice}
          key={choice.id}
          className="choice"
          data-choice={choice.id}
          data-effecttype={choice.effectType}
          data-effectchange={choice.effectChange}
        >
          {choice.text}
        </p>
      );
    });
    return compiledChoice;
  }

  function landingDisplay() {}

  useEffect(() => {
    printText(shownText);
  }, [shownText]);

  return (
    <>
      <pre className="landingArt" style={landingDisplay()}>
        {`
    {__     {__    {____     {__       {__      {_
    {__     {__  {__    {__  {_ {__   {___     {_ __
    {__     {__{__        {__{__ {__ { {__    {_  {__
    {__     {__{__        {__{__  {__  {__   {__   {__
    {__     {__{__        {__{__   {_  {__  {______ {__
    {__     {__  {__     {__ {__       {__ {__       {__
      {_____       {____     {__       {__{__         {__

    {___     {__{________{___ {______
    {_ {__   {__{__           {__
    {__ {__  {__{__           {__
    {__  {__ {__{______       {__
    {__   {_ {__{__           {__
    {__    {_ __{__           {__
    {__      {__{________     {__
    `}
      </pre>

      <div className="text">
        <p className="textLine lastLine"> {shownText_4} </p>
        <p className="textLine lastLine"> {shownText_3} </p>
        <p className="textLine lastLine"> {shownText_2} </p>
        <p className="textLine lastLine"> {shownText_1} </p>
        <span className="displayCarat">> </span>
        <p className="textLine currentLine"> {shownText} </p>
      </div>
      <div className="choices" style={displayChoices()}>
        {generateChoices()}
      </div>
    </>
  );
}
