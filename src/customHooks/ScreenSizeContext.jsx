// import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

// const ScreenSizeContext = createContext();

// const ScreenSizeProvider = ({ children }) => {
//   const [screenSize, setScreenSize] = useState({
//     screenWidth: window.innerWidth,
//     screenHeight: window.innerHeight,
//   });
 
//   const [totalPrice, setTotalPrice] = useState(0)
//   const [ids, setIds] = useState([])


//    const handleSize = () => {
//     setScreenSize({
//       screenWidth: window.innerWidth,
//       screenHeight: window.innerHeight,
//     });
//   }
//   useEffect(() => {
//     // handleSize();

//     window.addEventListener("resize", handleSize);

//     return () => window.removeEventListener("resize", handleSize);
//   }, []);

//   return (
//     <ScreenSizeContext.Provider value={{screenSize, totalPrice, setTotalPrice, ids, setIds}}>
//       {children}
//     </ScreenSizeContext.Provider>
//   );
// };

// export const useScreenSize = () => useContext(ScreenSizeContext);

// export default ScreenSizeProvider;


//?trail

import React, { createContext, useCallback, useContext, useEffect, useState, useMemo } from "react";

const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [ids, setIds] = useState([]);
  const [groupedItems, setGroupedItems] = useState([])



  const handleSize = useCallback(() => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  }, []);

  
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [handleSize]);



  const addItems = useCallback((price, id) => {
    setTotalPrice(prev => prev + price);
    setIds(prevIds => [...prevIds, id]);
  }, []);

  const deleteItems = useCallback((price, id) => {
    setTotalPrice(prev => prev - price);
    setIds(prevIds => {
      const index = prevIds.findIndex(itemId => itemId === id);
      if (index !== -1) {
        return [...prevIds.slice(0, index), ...prevIds.slice(index + 1)];
      }
      return prevIds;
    });
  }, []);
 
 const updateGroupedItems = (groupItems) => {
  setGroupedItems(groupItems)
 }


  const contextValue = useMemo(() => ({
    screenSize,
    totalPrice,
    setTotalPrice,
    groupedItems,
    ids,
    setIds,
    addItems,
    deleteItems,
    updateGroupedItems
  }), [screenSize, totalPrice, groupedItems, ids, addItems, deleteItems]);

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
