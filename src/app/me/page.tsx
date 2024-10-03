"use client";

import "../../styles/style.css";
import React from "react";
import Layout from "../../components/layout";
import Module from "../../components/module";
import Link from "next/link";

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
        <Link href="https://read.cv/briantan" target="_blank">
          hi, im brian
        </Link>
      </Module>

      <Module>
        <div className="module1">
          <p>
            b. 2004, santa rosa. currently a 4th year computer science student.
            looking to build software for someone. i grew up in singapore, but
            now, i spend my days making computers do things in rockville, md. in
            the future, i would like to go back to san francisco for a few years
            :-)
            <br />
            <br />
            i am currently interested in software for: ai/ml, quants/hft,
            healthcare, and pharmaceuticals
            <br />
            lately ive been enjoying building a neovim config and doing some of
            my homework in latex
            <br />
            my first open source pr was merged recently, so i am also working on
            contributing to open source more, something fun like neovim plugins
            <br />
          </p>
        </div>
      </Module>

      <Module>
        <Link href="https://github.com/yoleuh" target="_blank">
          github
        </Link>
      </Module>

      <Module>
        <Link href="mailto:tan.1220@osu.edu" target="_blank">
          mail
        </Link>
      </Module>
    </Layout>
  );
}
