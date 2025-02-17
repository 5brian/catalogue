import "@/styles/style.css";
import React from "react";
import Layout from "@/components/layout";
import Module from "@/components/module";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="brian tan">
      <Module>
        <Link href="../me">me</Link>
      </Module>
      <Module>
        <Link href="../work">work</Link>
      </Module>
      <Module>
        <Link href="../uses">uses</Link>
      </Module>
      <Module>
        <Link href="../lucky" target="_blank">
          i&apos;m feeling lucky
        </Link>
      </Module>
    </Layout>
  );
}
