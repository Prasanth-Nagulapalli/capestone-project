import React from "react";
import { Link } from "react-router-dom";
import { footerImg, NavLogo } from "../utils";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
const Footer = () => {
  const { screenWidth } = useScreenSize();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer_sec">
      <div className="footer_top_nav" onClick={handleScrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
        <p>back To top</p>
      </div>
      <section className="footer_center _max_width_center">
        <figure className="footer_logo">
          {screenWidth <= 686 ? (
            <>
              <img loading="lazy" src={NavLogo} alt="footerImg" />{" "}
              <p>
                <span>&copy; </span>copyright - 2025
              </p>
            </>
          ) : (
            <img loading="lazy" src={footerImg} alt="footerImg" />
          )}
        </figure>
        <nav className="footer_navList">
          <section className="footer_nav_section">
            <header>
              <h1>Doormat Navigation</h1>
            </header>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/reservations"}>Reservations</Link>
              </li>
              <li>
                <Link to={"/orderonline"}>Order Online</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </section>
          <section className="footer_nav_section">
            <header>
              <h1>Contact</h1>
            </header>
            <ul>
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">Phone</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </section>
          <section className="footer_nav_section">
            <header>
              <h1>Social Media Links</h1>
            </header>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/prasanth-n-612312252/"
                >
                  Linkdin
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Prasanth-Nagulapalli"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
