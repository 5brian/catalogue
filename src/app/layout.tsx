import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "are you having fun?",
  description: "are you having fun?",
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
