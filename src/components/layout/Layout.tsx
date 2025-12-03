import { ReactNode } from "react";
import NavBar from "../navbar/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="p-6">{children}</div>
    </>
  );
};

export default Layout;

export const withLayout = (Component: any) => {
  return () => (
    <Layout>
      <Component />
    </Layout>
  );
};
