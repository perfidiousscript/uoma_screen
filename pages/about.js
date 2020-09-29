import Head from "next/head";

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
          Back
        </span>
      </div>
      <div className="text">
        <p>Uoma is a work of interactive fiction.</p>
        <p>
          The reader's choices affect the path and outcome of the story. The
          work considers ideas of agency, the boundaries of art and technology,
          and eternal return. If you believ the story has ended, it has most
          likely just begun.
        </p>
        <br />
        <p>Story, concept and code: Samuel M. Moss </p>
        <p>Design and images: Mike Corrao</p>
        <br />
        <p>Written with Next.js</p>
        <p>
          Logos generated with Patrick Gillespie's{" "}
          <a href="http://patorjk.com/software/taag/">
            Text ASCII Art Generator
          </a>
        </p>
      </div>
    </>
  );
}
