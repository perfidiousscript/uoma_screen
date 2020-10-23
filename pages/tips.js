import Head from "next/head";
import Link from "next/link";
import home_button from "../components/home_button.js";

export default function Tips() {
  return (
    <>
      {home_button()}
      <div className="text">
        <p>Uoma is a work of interactive fiction.</p>
        <p>
          The reader's choices affect the path and outcome of the story. The
          work considers ideas of agency, the boundaries of art and technology,
          and eternal return.
        </p>
        <p>
          As this is not a game, there is no objective aside from exploring and
          experiencing the world of Uoma.
        </p>
        <p>
          Progress will be recorded automatically. You may close the story and
          return to it at any time to find yourself right where you left off.
        </p>
        <p>Life in Uoma is governed by forces distant and ineffable.</p>
        <p>Death in Uoma is only a form of return.</p>
      </div>
    </>
  );
}
