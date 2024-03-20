import React from "react";
import { Link } from "react-router-dom";
import { NavLogo } from "../../utils";
import { navData } from "../../utils/data";
const Header = () => {
  return (
    <header className="main_nav_header">
      <nav className="_flex_box _max_width_center">
        <figure className="main_nav_logo">
          <img src={NavLogo} alt="Restaurant Logo" />
        </figure>
        <ul className="_flex_box main_nav_list">
          {navData.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
