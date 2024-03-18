import React from "react";
import HeaderCss from "./header.module.css";
import { Link } from "react-router-dom";
import { NavLogo } from "../../utils";

const Header = () => {
  const { header, nav, headerLogo, navList } = HeaderCss;

  return (
    <header className={header}>
      <nav className={nav}>
        <figure className={headerLogo}>
          <img src={NavLogo} alt="Restaurant Logo" />
        </figure>
        <ul className={navList}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link href="#">Reservations</Link>
          </li>
          <li>
            <Link href="#">Order Online</Link>
          </li>
          <li>
            <Link href="#">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
