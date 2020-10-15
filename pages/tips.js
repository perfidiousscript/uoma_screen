import Head from "next/head";
import Link from "next/link";

export default function Tips() {
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
      <div className="choices">
        <Link href="/">
          <span
            onMouseEnter={selectedBackground}
            onMouseLeave={unselectedBackground}
            key="start"
            className="activeChoice"
          >
            Back
          </span>
        </Link>
      </div>
    </>
  );
}
