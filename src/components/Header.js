import React, { useState } from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { NavLink } from "react-router-dom";
import { NavLogo } from "../utils";
import { navData } from "../utils/data";

const Header = () => {
  const { screenWidth } = useScreenSize();
  const [show, setShow] = useState(true);

  const showMenu = () => {
    setShow(!show);
  };

  const handleLink = () => {
    setShow(true);
  };

  return (
    <>
      <header className="main_nav_header" id="Home_Nav">
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
                <NavLink to={item.path} onClick={handleLink}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        style={{ marginBottom: screenWidth <= 768 ? "5.4538rem" : "0" }}
      ></div>
    </>
  );
};

export default Header;
