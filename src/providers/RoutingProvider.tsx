import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../pages/Home";
import Lowongan from "../pages/Lowongan";
import Alumni from "../pages/Alumni";
import Profil from "../pages/Profil";
import Kontak from '../pages/Kontak';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
    <Route path="/lowongan" element={<Lowongan />} />
    <Route path="/alumni" element={<Alumni />} />
    <Route path="/kontak" element={<Kontak />} />
    <Route path="/profil" element={<Profil />} />
    </>
   )
);

export default function RoutingProvider() {
  return <RouterProvider router={router} />;
}
