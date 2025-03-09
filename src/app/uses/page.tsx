"use client";

import "@/styles/style.css";
import React from "react";
import Layout from "@/components/layout";
import Module from "@/components/module";
import Link from "next/link";

export default function Uses() {
  return (
    <Layout title="all my things" showBack={true}>
      <Module>
        <div className="module1">
          <p>
            <i>software</i>
            <br />
            macos, nix, aerospace | nixos, flakes, home-manager
            <br />
            zen, zed, kitty, chrome, obsidian, sioyek
            <br />
            alfred, karabiner, skhd
            <br />
            <i>extensions</i>
            <br />
            vimium c,{" "}
            <Link
              href="https://github.com/familyfriendlymikey/fuzzyhome"
              target="_blank"
            >
              fuzzyhome,{" "}
            </Link>
            ubo lite, volume master
            <br />
            nvimtree, harpoon, treesitter, vimtex
            <br />
            <Link href="https://github.com/5brian/dots" target="_blank">
              [dots]{" "}
            </Link>
            <Link href="https://uses.tech/" target="_blank">
              [/uses]
            </Link>
          </p>
        </div>
      </Module>

      <Module>
        <div className="module1">
          <p>
            <i>hardware</i>
            <br />
            m4 mac mini 10GbE, m1 macbook pro 13in
            <br />
            <Link
              href="https://pcpartpicker.com/user/yaystar/saved/#view=WHbp3C"
              target="_blank"
            >
              pc:{" "}
            </Link>
            7800x3d, rx6800
            <br />
            xl2546k, 60% gateron brown kb, gpx superlight, zowie gsr se, samsung
            t7 2tb
          </p>
        </div>
      </Module>

      <Module>
        <div className="module1">
          <p>
            <i>programming</i>
            <br />i like c++, rust, and go
          </p>
        </div>
      </Module>

      <Module>
        <Link href="/uses/archivepage">i&apos;m feeling lucky archive</Link>
      </Module>
    </Layout>
  );
}
