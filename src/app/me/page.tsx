"use client";

import React from "react";
import Layout from "../../components/layout";
import Module from "../../components/module";
import LinkButton from "../../components/link";

export default function Me() {
  return (
    <Layout
      title={
        <span className="marquee" style={{ pointerEvents: "none" }}>
          who cares?
        </span>
      }
      showBack={true}
    >
      <Module>
        <LinkButton href="https://read.cv/briantan" target="_blank">
          hi, im brian
        </LinkButton>
      </Module>

      <Module>
        <div className="module1">
          <p>
            b. 2004, santa rosa. currently a 4th year computer science student.
            looking to build software for someone. i grew up in singapore, but
            now, i spend my days making computers do things in rockville, md. in
            the future, i would like to go back to san francisco for a few
            years, and experience sf tech for myself :-)
            <br />
            <br />i am currently interested in software for: ai/ml, quants/hft,
            healthcare, and pharmaceuticals
          </p>
        </div>
      </Module>

      <Module>
        <LinkButton href="https://github.com/yoleuh" target="_blank">
          github
        </LinkButton>
      </Module>

      <Module>
        <LinkButton href="mailto:tan.1220@osu.edu" target="_blank">
          mail
        </LinkButton>
      </Module>
    </Layout>
  );
}
