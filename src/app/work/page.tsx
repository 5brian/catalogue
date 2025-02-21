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
            height: "90vh",
          }}
        >
          <p>
            this page is still a work in progress :]
            <br />
            <br />
            see some of my stuff on github for now:
            <br />
            <br />
            this page: <br />
            <Link href="https://github.com/5brian/catalogue" target="_blank">
              github.com/5brian/catalogue
            </Link>
            <br />
            <br />
            my bluesky web client: <br />
            <Link href="https://github.com/5brian/old.bsky" target="_blank">
              github.com/5brian/old.bsky
            </Link>
            <br />
            <br />
            <a href="../">[back]</a>
          </p>
        </div>
      </div>
    </>
  );
}
