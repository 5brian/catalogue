"use client";

import React from "react";
import Layout from "../../components/layout";
import Module from "../../components/module";
import LinkButton from "../../components/link";

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
            <LinkButton href="https://github.com/FelixKratz/SketchyBar">
              sketchybar
            </LinkButton>
            <br />
            wm:{" "}
            <LinkButton href="https://github.com/nikitabobko/AeroSpace">
              aerospace
            </LinkButton>
            <br />
            kitty, neovim
            <br />
            claude pro, perplexity
            <br />
            chrome, obsidian, linear, texts.com, vscode insiders, alfred
            <br />
            extensions: vimium c, fuzzyhome, ublock, grepper, volume master,
            simplify, goodtwitter2
            <br />
            copilot, error lens, gitlens, prettier, es7 snippets, tabout,
            neovim, todo highlight, live server
            <br />
            nvimtree, harpoon, treesitter
            <br />
            prev: archlinux, fish, arc, raycast, spacelauncher, zed, warp, cron,
            [rectangle, alt-tab], [yabai, skhd]
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
            <LinkButton href="https://pcpartpicker.com/user/yaystar/saved/#view=WHbp3C">
              pc:{" "}
            </LinkButton>
            7800x3d, rx6800
            <br />
            <i>
              wants: studio display, apple magsafe charger, anker 622, wooting
              60he, 4090, herman miller aeron, raspberry pi, 3d printer, 48U
              server rack, home network, drying cabinet, the Barista Pro
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
            <i>misc: sql, solidworks, excel</i>
          </p>
        </div>
      </Module>

      <Module>
        <LinkButton href="/stuff/archivepage">
          i&apos;m feeling lucky archive
        </LinkButton>
      </Module>
    </Layout>
  );
}
