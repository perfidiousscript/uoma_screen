import React, { useEffect, useState } from "react";

export default function First() {
  const [selectedChoice, setChoice] = useState(null);

  function selectedBackground(e) {
    setChoice(e.target.dataset.choice);
    e.target.class = "chartreuse";
    e.target.style.color = "black";
  }

  function unselectedBackground(e) {
    setChoice(null);
    e.target.style.background = "black";
    e.target.style.color = "chartreuse";
  }

  useEffect(() => {});

  return (
    <>
      <p className="lastLine"> </p>
      <p className="currentLine"> </p>
      <div className="choices">
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          className="choice"
          data-choice="c1"
        >
          Choice 1
        </span>
        <span
          onMouseEnter={selectedBackground}
          onMouseLeave={unselectedBackground}
          className="choice"
          data-choice="c2"
        >
          Choice 2
        </span>
      </div>
    </>
  );
}
