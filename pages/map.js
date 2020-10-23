import Head from "next/head";
import Link from "next/link";

export default function Map() {
  return (
    <>
      <pre>
        {`
                                 N
                               Forest

                Forest      | Garden(N) |	 Forest

                Forest      | Garden(S) ||  STUDIO   |  Forest

      Forest    NW A-frames |   Sep's   ||Nar A-frame| Forest
                             ___________
      Forest   | Meditation||           ||  School   |  NE A-frames    Plain
                            |           |
W      PATH        PATH     I   Shrine  I    PATH        PATH         PATH    E
                            |           |
      Forest   |   Admin   ||___________||  Dining   |  E  A-frames    Plain

      Forest   |SW A-frames||  Medical  || Kitchen   |  SE A-frames    Forest

      Forest   | Orchard(W)|  Orchard(N) |Orchard(E) |  Forest

                  Forest   |  Orchard(S) |   Forest

                            |   Gate    |

                                 S
      `}
      </pre>
    </>
  );
}
