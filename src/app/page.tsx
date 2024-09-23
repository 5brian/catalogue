import "../styles/style.css";
import React from "react";
import Layout from "../components/layout";
import Module from "../components/module";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="brian tan">
      <Module>
        <Link href="../me">me</Link>
      </Module>
      <Module>
        <Link href="https://5s55jrv5h.sites.cv/">work</Link>
      </Module>
      <Module>
        <Link href="../stuff">stuff</Link>
      </Module>
      <Module>
        <Link href="../lucky" target="_blank">
          i&apos;m feeling lucky
        </Link>
      </Module>
    </Layout>
  );
}
