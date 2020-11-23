import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { home_logo } from "../story_material/logos.js";

export default function home_button() {
  function selectedBackground(e) {
    e.target.style.background = "chartreuse";
    e.target.style.color = "black";
  }

  function unselectedBackground(e) {
    e.target.style.background = "black";
    e.target.style.color = "chartreuse";
  }

  return (
    <Link href="/">
      <pre
        className="homeButton"
        onMouseEnter={selectedBackground}
        onMouseLeave={unselectedBackground}
      >
        {home_logo}
      </pre>
    </Link>
  );
}
