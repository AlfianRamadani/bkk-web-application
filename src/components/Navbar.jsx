import React, { useState } from "react";
import Sekolah from "../assets/images/smk2.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = {
    Home: "/",
    Profil: "/profil",
    Lowongan: "/lowongan",
    Alumni: "/alumni",
    Kontak: "/kontak",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-2 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-0">
        <Link to="/">
          <figure className="flex items-center space-x-2">
            <img src={Sekolah} className="w-12 h-auto" alt="" />
            <span>
              <figcaption className="text-lg font-bold">BKK</figcaption>
              <figcaption className="text-sm">SMK Negeri 2 Balikpapan</figcaption>
            </span>
          </figure>
        </Link>
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="material-icons">menu</span>
        </button>
        <ul className={`md:flex md:items-center md:space-x-6  ${isMenuOpen ? "block" : "hidden"}`}>
          {Object.entries(NavLink).map(([label, path]) => (
            <li key={path}>
              <Link
                to={path}
                className={`block md:inline-block py-2 px-4 text-gray-700 hover:text-blue-600 ${location.pathname === path ? "font-bold border-b-2 border-blue-600" : "nav__link"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
