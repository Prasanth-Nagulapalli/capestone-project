import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLogo } from "../utils";
import { navData } from "../utils/data";
const Header = () => {
  const [show, setShow] = useState(true);

  const showMenu = () => {
    setShow(!show);
  };

  const handleLink = () => {
    setShow(true);
  };

  return (
    <header className="main_nav_header">
      <nav className="_flex_box _max_width_center">
        <figure className="main_nav_logo">
          <img loading="lazy" src={NavLogo} alt="Restaurant Logo" />
        </figure>

        <div className="nav_bars">
          <i
            onClick={showMenu}
            className={show ? "fa-solid fa-bars" : "fa-solid fa-times"}
          ></i>
        </div>
        <ul
          className={
            show
              ? "_flex_box main_nav_list"
              : "_flex_box main_nav_list  showMenu"
          }
        >
          {navData.map((item) => (
            <li key={item.name}>
              <Link to={item.path} onClick={handleLink}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
