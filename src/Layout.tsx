import { ReactNode } from "react";
import Header from "./components/Header/Header";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import Main from "./components/Main/Main";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="w-full h-svh flex flex-col 
    bg-slate-900 text-white font-roboto"
    >
      {/* header here */}
      <Header />
      {/* body */}
      <div className="sub-wrapper flex-1">
        <div className="flex flex-col md:flex-row">
          {/* Left sidebar */}
          <LeftSideBar />
          {/* main content */}
          <Main>{children}</Main>
          {/* right sidebar */}
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
