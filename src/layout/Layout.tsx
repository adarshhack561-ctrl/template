import { FC, ReactNode } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
      }}
    >
      <Header />
      <NavBar />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
