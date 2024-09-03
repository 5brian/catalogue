import { Inter } from "next/font/google";
import Back from "./back";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
  title: React.ReactNode;
  showBack?: boolean;
}

const Layout = ({ children, title, showBack = false }: LayoutProps) => (
  <div className={inter.className}>
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
        {showBack && <Back />}
        <h1
          className="text-white text-center text-2xl m-0"
          style={{ flex: 1, textAlign: "center" }}
        >
          {title}
        </h1>
        {showBack && <span style={{ visibility: "hidden" }}>←</span>}
      </div>
    </div>
    <div className="grid">{children}</div>
  </div>
);

export default Layout;
