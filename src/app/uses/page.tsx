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
            zen, zed
            <br />
            kitty, tmux, neovim, yazi, zoxide, lazygit, btop
            <br />
            chrome, obsidian, linear, texts.com, keynote, sioyek,{" "}
            <Link href="https://un.ms/research" target="_blank">
              research
            </Link>
            <br />
            alfred, karabiner, skhd,{" "}
            <Link href="https://github.com/Caldis/Mos" target="_blank">
              mos,{" "}
            </Link>
            <Link
              href="https://github.com/actuallymentor/battery"
              target="_blank"
            >
              battery
            </Link>
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
            {/* <br />
            copilot, error lens, gitlens, tabout, vim, todo highlight,{" "}
            <Link
              href="https://github.com/tomrijndorp/vscode-finditfaster"
              target="_blank"
            >
              finditfaster,{" "}
            </Link>
            eazymotion */}
            <br />
            nvimtree, harpoon, treesitter, vimtex
            <br />
            <Link href="https://github.com/5brian?tab=stars" target="_blank">
              [stars]{" "}
            </Link>
            <Link href="https://github.com/5brian/dots" target="_blank">
              [dots]{" "}
            </Link>
            <Link href="https://github.com/5brian/flake" target="_blank">
              [nix wip]{" "}
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
            anker 341, samsung t7 2tb, xl2546k, 60% gateron brown kb, gpx
            superlight, zowie gsr se
            <br />
            ipad air 5th gen, apple pencil, smart keyboard folio, cca cra+,
            airpods pro 2, iphone 13, apple watch 8 41mm gps, ti84 plus ce pink
            <br />
            <Link
              href="https://pcpartpicker.com/user/yaystar/saved/#view=WHbp3C"
              target="_blank"
            >
              pc:{" "}
            </Link>
            7800x3d, rx6800
            <br />
            {/*
            <i>
              wants: lily58, qc45, thinkpad of some sort, studio display,
              apple magsafe charger, anker 622, herman miller aeron,
              raspberry pi, 3d printer, 48U server rack, home network,
              drying cabinet, the Barista Pro, fdrx7, sk1rr
            </i>
            */}
          </p>
        </div>
      </Module>

      <Module>
        <div className="module1">
          <p>
            <i>programming</i>
            <br />
            cpp, rust, go
            <br />
            typescript, react, nextjs, tailwindcss
          </p>
        </div>
      </Module>

      <Module>
        <Link href="/uses/archivepage">i&apos;m feeling lucky archive</Link>
      </Module>
    </Layout>
  );
}
