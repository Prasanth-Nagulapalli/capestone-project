import React from "react";
import { Link } from "react-router-dom";
import { footerImg } from "../utils";
const Footer = () => {


  return (
    <footer className="footer_sec">
      <section className="footer_center _max_width_center">
        <figure className="footer_logo">
          <img loading="lazy" src={footerImg} alt="footerImg" />
        </figure>
        <nav className="footer_navList">
          <section className="footer_nav_section" >
            <header>

            <h1>Doormat Navigation</h1>
            </header>

            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Menu</Link>
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
                <a href="#">Phone Number</a>
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
                <a href="#">Linkdin</a>
              </li>
              <li>
                <a href="#">GitHub</a>
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
