import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hi@brian-tan.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Monaco, monospace" }}>{children}</body>
    </html>
  );
}
