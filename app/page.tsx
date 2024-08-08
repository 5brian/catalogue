import Head from "next/head";
import Link from "next/link";
import "../public/style.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>brian</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <div style={{ backgroundColor: "blue" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>brian tan</h1>
      </div>
      <div className="grid">
        <div className="module">
          <p>
            <Link href="/me">me</Link>
          </p>
        </div>
        <div className="module">
          <p>
            <Link href="/work">work</Link>
          </p>
        </div>
        <div className="module">
          <p>
            <Link href="/stuff">stuff</Link>
          </p>
        </div>
        <div className="module">
          <p>
            <Link href="/lucky" target="_blank">
              i'm feeling lucky
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
