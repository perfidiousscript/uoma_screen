import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import packageJson from "../package.json";
import styles from "../styles/Home.module.css";
import cookieCutter from "cookie-cutter";
import {
  uoma_logo,
  uoma_logo_corrupt_1,
  uoma_logo_corrupt_2,
  uoma_logo_corrupt_3,
  uoma_logo_corrupt_4,
  uoma_logo_corrupt_5,
  uoma_logo_corrupt_6
} from "../story_material/logos.js";

export default function Home() {
  var [readThroughNumber, setReadThroughNumber] = useState(null);
  var [logo, setLogo] = useState(uoma_logo);
  var [isGlitching, setIsGlitching] = useState(false);
  const logo_array = [
    uoma_logo,
    uoma_logo_corrupt_1,
    uoma_logo_corrupt_2,
    uoma_logo_corrupt_3,
    uoma_logo_corrupt_4,
    uoma_logo_corrupt_5,
    uoma_logo_corrupt_6
  ];

  function selectedBackground(e) {
    e.target.style.background = "chartreuse";
    e.target.style.color = "black";
  }

  function unselectedBackground(e) {
    e.target.style.background = "black";
    e.target.style.color = "chartreuse";
  }

  function updateReadThroughNumber() {
    if (!cookieCutter.get("readThroughNumber")) {
      cookieCutter.set("0");
    }
    let rT = cookieCutter.get("readThroughNumber");
    setReadThroughNumber(rT);
  }

  function changeLogo() {
    if (!isGlitching) {
      setIsGlitching(true);
      let nextLogo = Math.floor(Math.random() * (logo_array.length - 1));
      setLogo(logo_array[nextLogo + 1]);
      setTimeout(() => {
        setLogo(logo_array[0]);
        setIsGlitching(false);
        corruptText();
      }, 150);
    }
  }

  function corruptText() {
    let jitter = 2000 * Math.random();
    setTimeout(() => {
      changeLogo();
    }, jitter);
  }

  function startText() {
    if (readThroughNumber) {
      return readThroughNumber == 0 ? "Start" : "Return";
    }
  }

  useEffect(() => {
    updateReadThroughNumber();
  }, [readThroughNumber]);

  useEffect(() => {
    if (readThroughNumber == 1) {
      setTimeout(() => {
        corruptText();
      }, 1000);
    }
  }, [logo]);

  return (
    <>
      <div className="landingArt">
        <pre className="uomaAscii">{logo}</pre>
        <span className="versionNumber">patch {packageJson.version}</span>
        <p className="bottomBar">{`############################################################################################`}</p>
        <div className="choices">
          <Link href="/story">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
              key="start"
              className="activeChoice"
            >
              {startText()}
            </span>
          </Link>
          <Link href="/tips">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
              key="start"
              className="activeChoice"
            >
              Tips
            </span>
          </Link>
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
          <Link href="/about">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
              key="about"
              className="activeChoice"
            >
              About
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
