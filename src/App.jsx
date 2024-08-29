import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Kontak from "./pages/Kontak";
import Profil from "./pages/Profil";
import Alumni from "./pages/Alumni";
import Lowongan from "./pages/Lowongan";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lowongan" element={<Lowongan />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
};

export default App;
