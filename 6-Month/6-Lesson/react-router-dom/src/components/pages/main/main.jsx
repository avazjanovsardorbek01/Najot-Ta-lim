import { Outlet } from "react-router-dom";
import Sidebar from "../../ui/sidebar/sidebar";
import Header from "../../ui/header/header";
import "./main.css";
const Main = () => {
  return (
    <div className="main_layout">
      <Sidebar />
      <div className="main-left">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;
