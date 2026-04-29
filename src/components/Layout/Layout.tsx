import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  title: string;
  children: ReactNode;
};

function Layout({ title, children }: Props) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-area">
        <Header title={title} />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;