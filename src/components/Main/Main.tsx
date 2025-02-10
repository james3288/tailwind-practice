import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <main className="flex-1">{children}</main>;
};

export default Main;
