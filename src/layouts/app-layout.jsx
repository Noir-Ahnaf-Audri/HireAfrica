import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const AppLayout = () => {
  return (
    <div>
      <div className="background"></div>
      <main className="min-h-screen">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
