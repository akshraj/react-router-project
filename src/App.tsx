import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Income from "./pages/Host/Income/Income";
import Reviews from "./pages/Host/Reviews/Reviews";
import VanDetail from "./pages/Vans/VanDetail/VanDetail";
import Layout from "./components/Layout/Layout";
import HostLayout from "./components/HostLayout/HostLayout";
import HostVans from "./pages/Host/HostVans/HostVans";
import HostVanDetail from "./pages/Host/HostVans/HostVanDetail/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVans/HostVanDetail/HostVanInfo/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVans/HostVanDetail/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVans/HostVanDetail/HostVanPhotos/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login/Login";
import AuthRequiredLayout from "./components/AuthRequiredLayout/AuthRequiredLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<NotFound />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="vans">
        <Route index element={<Vans />} />
        <Route path=":id" element={<VanDetail />} />
      </Route>
      <Route path="host" element={<HostLayout />}>
        <Route element={<AuthRequiredLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
