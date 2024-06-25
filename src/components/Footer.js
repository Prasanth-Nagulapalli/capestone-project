import React,{ useEffect} from "react";
import { Link } from "react-router-dom";
import { footerImg, NavLogo } from "../utils";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
const Footer = () => {
  const { screenSize,setFooterHeight } = useScreenSize();
  const { screenWidth } = screenSize;
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 
  useEffect(() => {
    const handleResize = () => {
      const footer = document.querySelector(".footer_sec");
      if (footer) {
        const height = footer.getBoundingClientRect().height;
        setFooterHeight(height);
        
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
  }, [setFooterHeight]);




  return (
    <footer className="footer_sec">
      <div className="footer_top_nav" onClick={handleScrollToTop}>
        <i className="fa-solid fa-arrow-up footer_top_nav_i"></i>
        <p className="footer_back_to_top">back To top</p>
      </div>
      <section className="footer_center _max_width_center">
        <figure className="footer_logo">
          {screenWidth <= 686 ? (
            <>
              <img
                className="footer_logo_img"
                loading="lazy"
                src={NavLogo}
                alt="footerImg"
              />{" "}
              <p>
                <span>&copy; </span>copyright - 2025
              </p>
            </>
          ) : (
            <img
              className="footer_logo_img"
              loading="lazy"
              src={footerImg}
              alt="footerImg"
              style={{ paddingTop: "0.5rem" }}
            />
          )}
        </figure>
        <nav className="footer_navList">
          <section className="footer_nav_section">
            <header>
              <h1 className="footer_navList_h1">Doormat Navigation</h1>
            </header>

            <ul className="footer_navList_ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/cart"}>Cart</Link>
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
              <h1 className="footer_navList_h1">Contact</h1>
            </header>
            <ul className="footer_navList_ul">
              <li>
                <Link>Address</Link>
              </li>
              <li>
                <Link>Phone</Link>
              </li>
              <li>
                <Link>Email</Link>
              </li>
            </ul>
          </section>
          <section className="footer_nav_section">
            <header>
              <h1 className="footer_navList_h1">Social Media Links</h1>
            </header>
            <ul className="footer_navList_ul">
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
                <Link>Instagram</Link>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
