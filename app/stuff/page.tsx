import Head from "next/head";
import "../../public/style.css";

export default function Stuff() {
  return (
    <>
      <Head>
        <title>uses</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <div style={{ backgroundColor: "blue" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>all my things</h1>
      </div>
      <div className="grid">
        <div className="module">
          <div className="module1">
            <p>
              <i>software</i>
              <br />
              kitty, neovim
              <br />
              arc, chrome, spotify, texts.com, notes, obsidian, notability,
              cron, slack, photoshop, premiere pro, devtoys, zed, visual studio,
              vscode insiders, linear, brew battery
              <br />
              extensions: vimium c, ublock, grepper, volume master, simplify,
              goodtwitter2
              <br />
              copilot, error lens, gitlens, prettier, es7 snippets, tabout,
              neovim, todo highlight, live server
              <br />
              nvimtree, harpoon, treesitter
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
              comply foam tips, iphone 13, apple watch 8 41mm gps, echo auto,
              echo dot
              <br />
              <a href="https://pcpartpicker.com/user/yaystar/saved/#view=WHbp3C">
                pc:
              </a>
              7800x3d, rx6800
              <br />
              <i>
                wants: studio display, apple magsafe charger, anker 622, wooting
                60he, 4090
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
              typescript, react, next.js, bootstrap, tailwindcss
              <br />
              .NET, C#, MonoGame
              <br />
              <i>misc: sql, solidworks, excel</i>
            </p>
          </div>
        </div>
        <div className="module">
          <p>
            <a href="/stuff/archive">i'm feeling lucky archive</a>
          </p>
        </div>
      </div>
    </>
  );
}
