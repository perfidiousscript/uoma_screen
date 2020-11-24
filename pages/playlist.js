import Head from "next/head";
import home_button from "../components/home_button.js";

export default function Playlist() {
  return (
    <>
      {home_button()}
      <div className="text">
        <p>
          A list of links to albums and artists which encapslate the tone of
          Uoma.
        </p>
        <p>If you enjoy the work support these artists.</p>
        <br />
        <p>
          <a
            href="https://blacksunvoid.bandcamp.com/album/sleep-meditations"
            target="_blank"
          >
            'Sleep Meditation' by Black sun Void
          </a>
        </p>
        <p>
          <a
            href="https://ruairiobaoighill.bandcamp.com/album/the-faceless-ones"
            target="_blank"
          >
            'The Faceless One' by Ruairi O'Baoighill
          </a>
        </p>
        <p>
          <a
            href="https://hoopoe.bandcamp.com/album/solar-data"
            target="_blank"
          >
            'SOLAR DATA' by SILTC
          </a>
        </p>
        <p>
          <a
            href="https://danielmenche.bandcamp.com/album/smoke"
            target="_blank"
          >
            'Smoke' by Daniel Menche
          </a>
        </p>
        <p>
          <a
            href="https://kalpamantra.bandcamp.com/album/frictions"
            target="_blank"
          >
            'Frictions' by Cosmodrone
          </a>
        </p>
      </div>
    </>
  );
}
