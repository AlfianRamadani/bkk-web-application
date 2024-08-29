import React from "react";
import Sekolah from "../assets/images/smk2.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const NavLink = {
    Home: "/",
    Profil: "/profil",
    Lowongan: "/lowongan",
    Alumni: "/alumni",
    Kontak: "/kontak",
  };
  return (
    <header className="header py-2">
      <nav className="navbar">
        <Link to='/'>
          <figure className="brand">
            <img src={Sekolah} className="brand__nav" alt="" />
            <span>
              <figcaption className="brand__name">BKK </figcaption>
              <figcaption className="">SMK Negeri 2 Balikpapan</figcaption>
            </span>
          </figure>
        </Link>
        <ul className="nav__links">
          {Object.entries(NavLink).map(([label, path]) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav__link ${location.pathname === path ? "active" : ""
                  }`}
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
