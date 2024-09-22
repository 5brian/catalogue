import Link from "next/link";

export default function Work() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <p>
            re-doing this page, will be back soon i promise, feel free to ask me
            for my resume @ tan.1220@osu.edu :)
            <br />
            <Link href="https://rdvrl4clj.sites.cv/" target="_blank">
              [readcv]{" "}
            </Link>
            for now
            <br />
            <a href="../">[back]</a>
          </p>
        </div>
      </div>
    </>
  );
}
