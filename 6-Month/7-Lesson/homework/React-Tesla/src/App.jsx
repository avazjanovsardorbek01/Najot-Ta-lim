import React from "react";
import { TeslaOne, TeslaTwo } from "./pages";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
