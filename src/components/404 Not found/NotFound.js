import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "25vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>404 NotFound</h1>
      <p style={{ fontSize: "2rem", color: "black",paddingTop:'5px' }}>
        This page is not Found please go back to Home Page
      </p>
    </div>
  );
};

export default NotFound;
