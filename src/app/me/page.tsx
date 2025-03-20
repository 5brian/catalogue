"use client";

import "@/styles/style.css";
import React from "react";
import Layout from "@/components/layout";
import Module from "@/components/module";
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
            b. 2004, santa rosa. currently a 4th year math and computer science
            student. looking to build software for someone! i grew up in
            singapore, but now, i spend my days making computers do things in
            rockville, md.
            <br />
            <br />
            lately ive been enjoying: exploring nixos and nix, and hacking on
            the vim motions in{" "}
            <Link href="https://github.com/zed-industries/zed" target="_blank">
              zed
            </Link>
            !
            <br />
          </p>
        </div>
      </Module>

      <Module>
        <Link href="https://github.com/5brian" target="_blank">
          github
        </Link>
      </Module>

      <Module>
        <Link href="mailto:hi@brian-tan.me" target="_blank">
          hi [at] brian-tan [dot] me
        </Link>
      </Module>
    </Layout>
  );
}
