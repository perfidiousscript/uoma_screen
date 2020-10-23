import Head from "next/head";
import Link from "next/link";
import home_button from "../components/home_button.js";

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
      {home_button()}
      <div className="text">
        <p>
          Story, concept and code:{" "}
          <a href="http://www.perfidiousscript.blogspot.com" target="_blank">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
            >
              Samuel M. Moss
            </span>
          </a>{" "}
        </p>
        <p>
          Design and images:{" "}
          <a href="http://www.mikecorrao.com/" target="_blank">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
            >
              Mike Corrao
            </span>
          </a>
        </p>
        <br />
        <p>
          The code for this project can be found on{" "}
          <a href="https://github.com/perfidiousscript/uoma_screen">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
            >
              github.
            </span>
          </a>
        </p>
        <p> Pull requests welcome.</p>
        <br />
        <p>
          Generated using{" "}
          <a href="https://nextjs.org/" target="_blank">
            {" "}
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
            >
              Next.js
            </span>
          </a>
        </p>
        <p>
          Logos generated with Patrick Gillespie's{" "}
          <a href="http://patorjk.com/software/taag/" target="_blank">
            <span
              onMouseEnter={selectedBackground}
              onMouseLeave={unselectedBackground}
            >
              Text ASCII Art Generator
            </span>
          </a>
        </p>
      </div>
    </>
  );
}
