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
        <p>Story, concept and code: Samuel M. Moss </p>
        <p>Design and images: Mike Corrao</p>
      </div>
    </>
  );
}
