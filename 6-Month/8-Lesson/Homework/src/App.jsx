// import { Routes, Route } from "react-router-dom";
// import Login from "./components/login/Login";
// import Cars from "./components/cars/Cars";
// import SingleCar from "./components/single-car/single-car";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="" element={<Login />} />
        <Route path="cars" element={<Cars />} />
        <Route path="single-car/:id" element={<SingleCar />} />
      </Routes> */}
      <Outlet />
    </div>
  );
}

export default App;
