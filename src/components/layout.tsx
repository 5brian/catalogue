import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div className={inter.className}>
    <div style={{ backgroundColor: "blue" }}>
      <h1 className="text-white text-center text-2xl">{title}</h1>
    </div>
    <div className="grid">{children}</div>
  </div>
);

export default Layout;
