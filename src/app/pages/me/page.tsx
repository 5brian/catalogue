"use client";
import Head from "next/head";
import "../../../styles/style.css";
import { useRouter } from "next/navigation";

export default function Me() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>me</title>
      </Head>
      <div
        style={{
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1500px",
          }}
        >
          <span
            onClick={() => router.push("/")}
            className="text-white cursor-pointer mr-2"
          >
            ←
          </span>
          <h1
            className="text-white text-center text-2xl m-0"
            style={{ flex: 1, textAlign: "center" }}
          >
            <span className="marquee" style={{ pointerEvents: "none" }}>
              who cares?
            </span>
          </h1>
          <span style={{ visibility: "hidden" }}>←</span>
        </div>
      </div>
      <div className="grid">
        <div className="module">
          <p>
            <a href="https://read.cv/briantan" target="_blank">
              hi, im brian
            </a>
          </p>
        </div>
        <div className="module">
          <div className="module1">
            <p>
              b. 2004, santa rosa. currently a 4th year computer science
              student. looking to build software for someone. i grew up in
              singapore, but now, i spend my days making computers do things in
              rockville, md. in the future, i would like to go back to san
              francisco for a few years, and experience sf tech for myself :-)
              <br />
              <br />i am currently interested in software for: ai/ml,
              quants/hft, healthcare, and pharmaceuticals
            </p>
          </div>
        </div>
        <div className="module">
          <p>
            <a href="https://github.com/yoleuh" target="_blank">
              github
            </a>
          </p>
        </div>
        <div className="module">
          <p>
            <a href="mailto:tan.1220@osu.edu" target="_blank">
              mail
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
