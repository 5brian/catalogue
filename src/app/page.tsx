import "../styles/style.css";
import React from "react";
import Layout from "../components/layout";
import Module from "../components/module";
import LinkButton from "../components/link";

export default function Home() {
  return (
    <Layout title="brian tan">
      <Module>
        <LinkButton href="../me">me</LinkButton>
      </Module>
      <Module>
        <LinkButton href="../work">work</LinkButton>
      </Module>
      <Module>
        <LinkButton href="../stuff">stuff</LinkButton>
      </Module>
      <Module>
        <LinkButton href="../lucky" target="_blank">
          i&apos;m feeling lucky
        </LinkButton>
      </Module>
    </Layout>
  );
}
