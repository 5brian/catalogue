import Head from "next/head";
import Image from "next/image";
import "./work.css";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <div className="work-container">
        <div>
          <p>
            link-game{" "}
            <Link
              href="https://github.com/caelummmuhhh/CSE3902-Game"
              target="_blank"
            >
              [github]
            </Link>
          </p>
          <br />
          <Image src="/game.gif" alt="link-game" width={500} height={300} />
          <br />
          <a href="../">back</a>
          <p>this page is a work in progress :{">"}</p>
        </div>
      </div>
    </>
  );
}
