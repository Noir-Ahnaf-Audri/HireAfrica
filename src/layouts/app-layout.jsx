import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="background"></div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
