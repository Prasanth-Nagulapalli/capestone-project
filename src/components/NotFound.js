import React from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { screenWidth } = useScreenSize().screenSize;

  const Styles = {
    background: "#fff",
    height: screenWidth <= 686 ? "85vh" : "calc(100vh - 5.4538rem)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: screenWidth <= 686 ? "3rem" : "5rem",
    transform: screenWidth <= 686 ? "translateY(-5rem)" : "none",
  };

  return (
    <div className="_max_width_center" style={Styles}>
      <h1 style={{ fontSize: screenWidth <= 686 ? "2.5rem" : "4rem" }}>
        404 NotFound
      </h1>
      <p
        style={{
          fontSize: screenWidth <= 686 ? "1.4rem" : "2rem",
          color: "black",
          paddingTop: "5px",
        }}
      >
        please go back to{" "}
        <Link to={"/"} style={{ textDecoration: "underline" }}>
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
