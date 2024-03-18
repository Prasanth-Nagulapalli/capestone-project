import React from "react";
import footerCss from "./footer.module.css";
import { Link } from "react-router-dom";
import { footerImg } from "../../utils";
const Footer = () => {
  const {
    footer,
    footerCenter,
    footerLogo,
    navList,
    contactSection,
    DoormatNavigation,
    mediaLinks,
  } = footerCss;

  return (
    <footer className={footer}>
      <section className={footerCenter}>
        <figure className={footerLogo}>
          <img src={footerImg} alt="footerImg" />
        </figure>
        <nav className={navList}>
          <section className={DoormatNavigation}>
            <h1>Doormat Navigation</h1>

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
          <section className={contactSection}>
            <h1>Contact</h1>
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
          <section className={mediaLinks}>
            <h1>Social Media Links</h1>
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
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
