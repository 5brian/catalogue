"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const LuckyPage: React.FC = () => {
  const router = useRouter();

  const links: string[] = [
    "https://flocrivello.com/changing-my-mind-on-remote-about-being-in-san-francisco",
    "https://blog.mattneary.com/worse-is-better",
    "https://rfc-editor.org/rfc/rfc1178",
    "https://inc.com/jason-aten/tech-companies-keep-falling-for-forever-fallacy-why-smart-leaders-should-know-better.html",
    "https://slate.com/human-interest/2012/05/how-to-cook-onions-why-recipe-writers-lie-and-lie-about-how-long-they-take-to-caramelize.html",
    "https://careershifters.org/expert-advice/the-forever-fallacy-or-why-youre-probably-not-going-to-find-your-perfect-career-and",
    "https://edconway.substack.com/p/watching-paint-dry",
    "https://engineersneedart.com/blog/samestop/samestop.html",
    "https://write.as/synth-ruiner/the-low-tech-manifesto",
    "https://tinybird.info/reputation-laundering",
    "https://subpixel.space/entries/life-after-lifestyle",
    "https://colin-scott.github.io/personal_website/research/interactive_latency.html",
    "https://archive.ph/VIbMD",
    "https://bit.kevinslin.com/p/leveraging-gpt-4-to-automate-the",
    "https://reproof.app/blog/notes-apps-help-us-forget",
    "https://gaultier.github.io/blog/x11_x64.html",
    "https://ntietz.com/blog/ai-text-should-be-labeled",
    "https://how-i-experience-web-today.com",
    "https://web.archive.org/web/20210513043002/web.eecs.utk.edu/~azh/blog/cosine.html",
    "https://www.cs.cmu.edu/events/smiley",
    "https://neptune.ai/blog/understanding-vectors-from-a-machine-learning-perspective",
    "https://quuxplusone.github.io/blog/2023/06/02/not-so-quick-pmr",
    "https://freshpaint.io/blog/github-copilot-and-the-methods-of-rationality",
    "https://iucompilercourse.github.io/tutorial-web-page",
    "https://jvns.ca/blog/2023/06/05/some-blogging-myths",
    "https://nskyc.com",
    "https://thezbook.com/code-first-vs-product-first",
    "https://notes.jordanscales.com/block-the-blue",
    "https://wy-lang.org",
    "https://mina-marketti.ocnk.net/product-list/206",
    "https://austinhenley.com/blog/makinggames.html",
    "https://dwheeler.com/essays/filenames-in-shell.html",
    "https://saurabhs.org/advanced-macos-commands",
    "https://neal.fun/password-game",
    "https://mowglii.com/itsycal/datetime.html",
    "https://cooklang.org",
    "https://washingtonpost.com/technology/2023/08/15/twitter-x-links-delayed",
    "https://wsj.com/articles/that-plum-job-listing-may-just-be-a-ghost-3aafc794",
    "https://motherfuckingwebsite.com",
    "https://code.golf",
    "https://blog.robertelder.org/how-to-make-a-cpu",
    "https://milan.cvitkovic.net/writing/things_youre_allowed_to_do",
    "https://jmmv.dev/2020/03/test-bracket.html",
    "https://mindingourway.com/obvious-advice",
    "https://programs.clearerthinking.org/what_is_your_time_really_worth_to_you.html",
    "https://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail",
    "https://scattered-thoughts.net/writing/there-are-no-strings-on-me",
    "https://danluu.com/why-benchmark",
    "https://quantamagazine.org/the-biggest-discoveries-in-computer-science-in-2023-20231220",
    "https://soggy.cat",
    "https://www.selfawaresoup.com/notes/2024/05/01/the-user-is-on-their-own/",
    "https://layoffs.fyi",
    "https://lastfun.site/intent",
    "https://gossipsweb.net/personal-websites",
    "https://jimmyhmiller.github.io/ugliest-beautiful-codebase",
    "https://thecut.com/2023/11/adulthood-is-a-mirage.html",
    "https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short",
  ];

  useEffect(() => {
    const openLink = () => {
      const i = Math.floor(Math.random() * links.length);
      router.push(links[i]);
    };

    openLink();
  }, [router]);

  return null;
};

export default LuckyPage;
