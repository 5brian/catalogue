"use client";
import Head from "next/head";
import "../../public/style.css";
import { useRouter } from "next/navigation";

export default function Stuff() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>uses</title>
      </Head>
      <div
        style={{
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1500px",
          }}
        >
          <span
            onClick={() => router.push("/")}
            className="text-white cursor-pointer mr-2"
          >
            ←
          </span>
          <h1
            className="text-white m-0"
            style={{ flex: 1, textAlign: "center" }}
          >
            all my things
          </h1>
          <span style={{ visibility: "hidden" }}>←</span>
        </div>
      </div>
      <div className="grid">
        <div className="module">
          <div className="module1">
            <p>
              <i>software [macos]</i>
              <br />
              kitty, neovim
              <br />
              claude pro, perplexity
              <br />
              chrome, obsidian, linear, texts.com, vscode insiders, alfred,
              nikitabobko/AeroSpace
              <br />
              extensions: vimium c, fuzzyhome, ublock, grepper, volume master,
              simplify, goodtwitter2
              <br />
              copilot, error lens, gitlens, prettier, es7 snippets, tabout,
              neovim, todo highlight, live server
              <br />
              nvimtree, harpoon, treesitter
              <br />
              prev: archlinux, fish, arc, raycast, spacelauncher, zed, warp,
              cron, [rectangle, alt-tab], [yabai, skhd]
            </p>
          </div>
        </div>
        <div className="module">
          <div className="module1">
            <p>
              <i>hardware</i>
              <br />
              2020 macbook pro m1 13in, anker 341, samsung t7 2tb, xl2546k, 60%
              gateron brown kb, gpx superlight, zowie gsr se, ipad air 5th gen,
              apple pencil, smart keyboard folio, cca cra+, airpods pro 2,
              iphone 13, apple watch 8 41mm gps, echo auto, echo dot, ti84 plus
              ce pink
              <br />
              <a
                href="https://pcpartpicker.com/user/yaystar/saved/#view=WHbp3C"
                target="_blank"
              >
                pc:{" "}
              </a>
              7800x3d, rx6800
              <br />
              <i>
                wants: studio display, apple magsafe charger, anker 622, wooting
                60he, 4090, herman miller aeron, raspberry pi, 3d printer, 48U
                server rack, home network, drying cabinet, the Barista Pro
              </i>
            </p>
          </div>
        </div>
        <div className="module">
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
        </div>
        <div className="module">
          <p>
            <a href="/stuff/archivepage">i&apos;m feeling lucky archive</a>
          </p>
        </div>
      </div>
    </>
  );
}
