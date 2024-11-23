import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { TeslaOne, TeslaTwo, TeslaThree, TeslaFour } from "../pages";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<TeslaOne />} />
        <Route path="teslatwo" element={<TeslaTwo />} />
        <Route path="teslathree" element={<TeslaThree />} />
        <Route path="teslafour" element={<TeslaFour />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
