import React from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { HeroImg_mid } from "../utils/index";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
const Hero = () => {
  const { screenSize } = useScreenSize();
  const navigate = useNavigate();
  const { screenWidth } = screenSize;

  return (
    <section className="hero_section">
      <section className="hero_sec_center">
        <article className="hero_article _max_width_center _flex_box">
          <section className="hero_text _flex_box">
            <header>
              <h1 className="hero_text_h1">
                <ReactTyped
                  strings={["Little Lemon"]}
                  typeSpeed={100}
                  cursorChar={"_"}
                />
              </h1>
              <p className="hero_text_header_p">Chicago</p>
            </header>
            <div className="hero_div">
              <p>
                We are a family owned mediteranean restaurant focused on
                traditional recipes served with a modern twist.{" "}
              </p>
              {screenWidth <= 500 && (
                <figure className="hero_Img">
                  <img
                    loading="lazy"
                    src={HeroImg_mid}
                    alt="hero Img"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              )}
            </div>
            <button
              className="reserve_btn"
              onClick={() => navigate("/reservations")}
            >
              Reserve a Table
            </button>
          </section>
          {screenWidth > 500 && (
            <figure className="hero_Img">
              <img
                loading="lazy"
                src={HeroImg_mid}
                alt="hero Img"
                style={{ objectFit: "cover" }}
              />
            </figure>
          )}
        </article>
      </section>
    </section>
  );
};

export default Hero;
