import Head from "next/head";
import Link from "next/link";

export default function Map() {
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
      <pre>
        {`
                                N
                              Forest
                Forest      |Garden(N)|	 Forest
                Forest      |Garden(S)||  STUDIO  |  Forest
      Forest    A-frame(A)  |__Sep's__| A-frame(Nar) Forest
      Forest   | Meditation||         ||  School  |  A-frame(B)    Plain
W      PATH        PATH     |  Shrine |    PATH        PATH         PATH    E
      Forest   |   Admin   ||_________||  Dining  |  A-frame(C)    Plain
      Forest    A-frame(D)  | Medical || Kitchen  |  A-frame(E)    Forest
      Forest    |Orchard(W)|Orchard(N)||Orchard(E)|  Forest
                  Forest   |Orchard(S)|   Forest
                           |   Gate   |
                                S
      `}
      </pre>
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
