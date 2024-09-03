import Head from "next/head";
import Link from "next/link";
import "../styles/style.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>brian</title>
      </Head>
      <div style={{ backgroundColor: "blue" }}>
        <h1 className="text-white text-center text-2xl">brian tan</h1>
      </div>
      <div className="grid">
        <div className="module">
          <p>
            <Link href="../pages/me">me</Link>
          </p>
        </div>
        <div className="module">
          <p>
            <Link href="../pages/work">work</Link>
          </p>
        </div>
        <div className="module">
          <p>
            <Link href="../pages/stuff">stuff</Link>
          </p>
        </div>
        <div className="module">
          <p>
            <Link href="../pages/lucky" target="_blank">
              i&apos;m feeling lucky
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
