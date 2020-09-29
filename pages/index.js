import Head from "next/head";
import React from "react";
import Link from "next/link";
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
        <span className="versionNumber">patch {packageJson.version}</span>
        <p className="bottomBar">{`############################################################################################`}</p>
        <div className="choices">
          <Link href="/story">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
              key="start"
              className="choice"
            >
              Start
            </span>
          </Link>
          <Link href="/about">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
              //onClick={}
              key="about"
              className="choice"
            >
              About
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
