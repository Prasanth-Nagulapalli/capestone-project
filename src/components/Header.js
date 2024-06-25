import React, { useState, useEffect } from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { NavLink } from "react-router-dom";
import { NavLogo } from "../utils";
import { navData } from "../utils/data";
const Header = () => {
  const { screenSize, setNavbarHeight } = useScreenSize();
  const { screenWidth } = screenSize;
  const [show, setShow] = useState(true);
  // const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const navBar = document.querySelector(".main_nav_header");
      if (navBar) {
        const height = navBar.getBoundingClientRect().height;
        setNavbarHeight(height);
      }
    };

    // Initial call on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setNavbarHeight]);

  const { itemsCount } = useScreenSize();
  const showMenu = () => {
    setShow(!show);
  };

  const handleLink = () => {
    setTimeout(() => {
      setShow(true);
    }, 50);
  };

  return (
    <>
      <header className="main_nav_header" id="Home_Nav">
        <nav className="_flex_box _max_width_center main_nav_header_nav">
          <figure className="main_nav_logo">
            <img
              loading="lazy"
              src={NavLogo}
              alt="Restaurant Logo"
              className="main_nav_logo_img"
            />
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
              <li key={item.name} className="main_nav_list_li">
                <NavLink
                  to={item.path}
                  onClick={handleLink}
                  className={"main_nav_list_li_a"}
                >
                  <span
                    className="main_nav_list_icons"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  ></span>
                  <span>{item.name}</span>
                </NavLink>

                {item.total && itemsCount ? (
                  <span
                    className="header_nav_cart_total_"
                    style={
                      itemsCount >= 10 && screenWidth <= 768
                        ? { right: "-2.75rem" }
                        : { right: "-2rem" }
                    }
                  >
                    {itemsCount}
                  </span>
                ) : null}
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
