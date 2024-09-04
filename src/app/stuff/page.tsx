"use client";

import "../../styles/style.css";
import React from "react";
import Layout from "../../components/layout";
import Module from "../../components/module";
import Link from "next/link";

export default function Stuff() {
  return (
    <Layout title="all my things" showBack={true}>
      <Module>
        <div className="module1">
          <p>
            <i>software</i>
            <br />
            os: macos
            <br />
            bar:{" "}
            <Link
              href="https://github.com/FelixKratz/SketchyBar"
              target="_blank"
            >
              sketchybar
            </Link>
            <br />
            wm:{" "}
            <Link
              href="https://github.com/nikitabobko/AeroSpace"
              target="_blank"
            >
              aerospace
            </Link>
            <br />
            kitty, neovim
            <br />
            claude pro, perplexity
            <br />
            chrome, obsidian, linear, texts.com, vscode insiders, alfred,
            lazygit,{" "}
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
            extensions: vimium c,{" "}
            <Link
              href="https://github.com/familyfriendlymikey/fuzzyhome"
              target="_blank"
            >
              fuzzyhome,{" "}
            </Link>
            ublock, grepper, volume master, simplify, goodtwitter2
            <br />
            copilot, error lens, gitlens, prettier, es7 snippets, tabout,
            neovim, todo highlight, live server
            <br />
            nvimtree, harpoon, treesitter
            <br />
            <i>
              prev: archlinux, arc, raycast, spacelauncher, zed, warp, cron,
              spacebar, [rectangle, alt-tab], [yabai, skhd]
            </i>
          </p>
        </div>
      </Module>

      <Module>
        <div className="module1">
          <p>
            <i>hardware</i>
            <br />
            2020 macbook pro m1 13in, anker 341, samsung t7 2tb, xl2546k, 60%
            gateron brown kb, gpx superlight, zowie gsr se, ipad air 5th gen,
            apple pencil, smart keyboard folio, cca cra+, airpods pro 2, iphone
            13, apple watch 8 41mm gps, echo auto, echo dot, ti84 plus ce pink
            <br />
            <Link
              href="https://pcpartpicker.com/user/yaystar/saved/#view=WHbp3C"
              target="_blank"
            >
              pc:{" "}
            </Link>
            7800x3d, rx6800
            <br />
            <i>
              wants: studio display, apple magsafe charger, anker 622, wooting
              60he, hhkb, 4090, herman miller aeron, raspberry pi, 3d printer,
              48U server rack, home network, drying cabinet, the Barista Pro,
              fdrx7
            </i>
          </p>
        </div>
      </Module>

      <Module>
        <div className="module1">
          <p>
            <i>programming</i>
            <br />
            java, c, x86-64 assembly
            <br />
            typescript, react, next.js, tailwindcss
            <br />
            .NET, C#, MonoGame
            <br />
            <i>misc: sql, solidworks, excel, latex</i>
          </p>
        </div>
      </Module>

      <Module>
        <Link href="/stuff/archivepage">i&apos;m feeling lucky archive</Link>
      </Module>
    </Layout>
  );
}
