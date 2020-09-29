import Head from "next/head";
import React from "react";
import packageJson from "../package.json";
import styles from "../styles/Home.module.css";

export default function Home() {
  function selectedBackground(e) {
    e.target.style.background = "chartreuse";
    e.target.style.color = "black";
  }

  function unselectedBackground(e) {
    e.target.style.background = "black";
    e.target.style.color = "chartreuse";
  }

  return (
    <>
      <div className="choices">
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          //onClick={}
          key="start"
          className="choice"
        >
          Start
        </span>
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          //onClick={}
          key="about"
          className="choice"
        >
          About
        </span>
      </div>
      <div className="landingArt">
        <pre className="uomaAscii">
          {`
 _   _ ________  ___  ___
| | | |  _  |  \\/  | / _ \\
| | | | | | | .  . |/ /_\\ \\
| | | | | | | |\\/| ||  _  |
| |_| \\ \\_/ / |  | || | | |
 \\___/ \\___/\\_|  |_/\\_| |_/
`}
        </pre>
        <span classname="versionNumber">patch {packageJson.version}</span>
        <p className="bottomBar">{`############################################################################################`}</p>
      </div>
    </>
  );
}
