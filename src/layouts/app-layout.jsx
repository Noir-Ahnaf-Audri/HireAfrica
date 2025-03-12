import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-8 bg-gray-800 mt-5">
        <div className="text-center text-white text-sm sm:text-base">
          <p className="font-semibold">
            Made with ❤️ by <span className="text-yellow-500">Fatin</span>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
