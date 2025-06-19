import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // your layout code
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;