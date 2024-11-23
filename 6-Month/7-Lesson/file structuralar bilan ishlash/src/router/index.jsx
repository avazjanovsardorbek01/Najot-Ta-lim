import App from "../App";
import Login from "../components/pages/login/Login";
import Cars from "../components/pages/cars/Cars";
import SingleCar from "../components/pages/single-car/single-car";
import Main from "../components//pages/main/main";
import Brand from "../components/pages/brand/brand";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<Main />}>
          <Route index element={<Cars />} />
          <Route path="single-car/:id" element={<SingleCar />} />
          <Route path="brand" element={<Brand />} />
          <Route />
          {/* <Route path="cars" element={<Cars />} />
        <Route path="single-car/:id" element={<SingleCar />} /> */}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
