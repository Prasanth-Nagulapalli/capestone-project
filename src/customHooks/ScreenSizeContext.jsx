import React, { createContext, useContext, useEffect, useState } from "react";

const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });
  const handleSize = () => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    // handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
