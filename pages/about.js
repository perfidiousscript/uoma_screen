import Head from "next/head";
import Link from "next/link";

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
      <div className="text">
        <p>Uoma is a work of interactive fiction.</p>
        <p>
          The reader's choices affect the path and outcome of the story. The
          work considers ideas of agency, the boundaries of art and technology,
          and eternal return. If you believ the story has ended, it has most
          likely just begun.
        </p>
        <br />
        <p>
          Story, concept and code:
          <a href="www.perfidiousscript.blogspot.com">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
            >
              Samuel M. Moss
            </span>
          </a>{" "}
        </p>
        <p>Design and images: Mike Corrao</p>
        <br />
        <p>Generated using Next.js</p>
        <p>
          Logos generated with Patrick Gillespie's{" "}
          <a href="http://patorjk.com/software/taag/">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
            >
              Text ASCII Art Generator
            </span>
          </a>
        </p>
      </div>
      <div className="choices">
        <Link href="/">
          <span
            onMouseEnter={selectedBackground}
            onMouseLeave={unselectedBackground}
            key="start"
            className="choice"
          >
            Back
          </span>
        </Link>
      </div>
    </>
  );
}
