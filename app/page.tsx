import Head from "next/head";
import Link from "next/link";
import "../public/style.css";

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
              i&apos;m feeling lucky
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
