import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
