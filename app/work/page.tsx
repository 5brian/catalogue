import Head from "next/head";
import Image from "next/image";
import "./work.css";

export default function Work() {
  return (
    <>
      <div className="work-container">
        <div>
          <p>
            link-game{" "}
            <a
              href="https://github.com/caelummmuhhh/CSE3902-Game"
              target="_blank"
            >
              [github]
            </a>
          </p>
          <br />
          <Image src="/gif.gif" alt="link-game" width={500} height={300} />
          <br />
          <a href="../">back</a>
          <p>this page is a work in progress :{">"}</p>
        </div>
      </div>
    </>
  );
}
