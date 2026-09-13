import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getFooterConfig } from "./footerConfig";

export default function Layout() {
  const { pathname } = useLocation();
  const footerConfig = getFooterConfig(pathname);

  return (
    <>
      <Header />
      <main className="flex-1 pt-header">
        <Outlet />
      </main>
      <Footer {...footerConfig} />
    </>
  );
}
