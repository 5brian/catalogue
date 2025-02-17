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
            wip
            <br />
            <Link href="https://github.com/5brian" target="_blank">
              github.com/5brian
            </Link>
            <br />
            <a href="../">[back]</a>
          </p>
        </div>
      </div>
    </>
  );
}
