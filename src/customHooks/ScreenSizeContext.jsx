import fooditems from "../utils/foodItems";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import useConfetti from "./Confetti";
import { randomRange } from "../utils/functions";

const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const fireConfetti = useConfetti();
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);
  const [ids, setIds] = useState([]);
  const [groupedItems, setGroupedItems] = useState([]);
  const [getDiscount, setgetDiscount] = useState(0);
  const [discountFlag, setDiscountFlag] = useState(false);
  const [removeDiscountFlag, setRemoveDiscountFlag] = useState(false);
  const [timeOutId, setTimeOutId] = useState(null);
  const [confirmOrder, setConfirmOrder] = useState(false);

  let [list, setList] = useState([]);
  let [itemsCount, setItemsCount] = useState(0);
  const [tip, setTip] = useState(0);
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

  useEffect(() => {
    if (ids.length > 0) {
      const updatedList = groupedItems
        .map((groupItem) => {
          const foodItem = fooditems.find((item) => item.id === groupItem.name);
          if (foodItem) {
            return { ...foodItem, values: groupItem.values };
          }
          return null;
        })
        .filter((item) => item !== null); // Ensure no null items are added

      setList(updatedList);
    } else {
      setList([]);
    }
  }, [groupedItems, ids, totalPrice]);

  useEffect(() => {
    let count = list.map((item) => {
      return item.values.length;
    });
    if (count) {
      let total = count.reduce((acc, curren) => acc + curren, 0);
      setItemsCount(total);
    }
  }, [list]);

  const handleRemovediscount = useCallback(() => {
    setTotalPrice((prev) => prev + getDiscount);
    setRemoveDiscountFlag(false);
  }, [getDiscount]);

  const addItems = useCallback(
    (price, id) => {
      setTotalPrice((prev) => prev + price);
      setIds((prevIds) => [...prevIds, id]);
      handleRemovediscount();
    },
    [handleRemovediscount]
  );

  const deleteItems = useCallback(
    (price, id) => {
      setTotalPrice((prev) => prev - price);
      setIds((prevIds) => {
        const index = prevIds.findIndex((itemId) => itemId === id);
        if (index !== -1) {
          return [...prevIds.slice(0, index), ...prevIds.slice(index + 1)];
        }
        return prevIds;
      });
      handleRemovediscount();
    },
    [handleRemovediscount]
  );

  const updateItems = useCallback((valuesArray) => {
    const groupedItems = valuesArray.reduce((acc, value) => {
      if (!acc[value]) {
        acc[value] = { name: value, values: [] };
      }
      acc[value].values.push(value);
      return acc;
    }, {});

    // Convert grouped items from object to array
    const itemsArray = Object.values(groupedItems);
    setGroupedItems(itemsArray);
  }, []);

  // Call updateItems with the values array
  useEffect(() => {
    updateItems(ids);
  }, [ids, updateItems]);

  const addTip = useCallback(() => {
    setTip((prev) => prev + 5);
  }, []);

  const minusTip = useCallback(() => {
    if (tip >= 5) {
      setTip((prev) => prev - 5);
    }
  }, [tip]);

  const handlediscount = useCallback(() => {
    setRemoveDiscountFlag(false);
    setDiscountFlag(false);
    let discount = 0;
    let timeout;
    if (totalPrice >= 250) {
      discount = randomRange(50, 250);
      setgetDiscount(discount);
      setTotalPrice((prev) => prev - discount);
      setDiscountFlag(true);
      setRemoveDiscountFlag(true);
      fireConfetti();
      setTimeout(() => {
        fireConfetti();
      }, 200);
      timeout = setTimeout(() => {
        setDiscountFlag(false);
      }, 5000);

      // clearTimeout(timeout)
    } else {
      discount = randomRange(10, totalPrice / 2);
      setgetDiscount(discount);
      setTotalPrice((prev) => prev - discount);
      setDiscountFlag(true);
      setRemoveDiscountFlag(true);
      fireConfetti();
      setTimeout(() => {
        fireConfetti();
      }, 200);
      timeout = setTimeout(() => {
        setDiscountFlag(false);
      }, 5000);
      // clearTimeout(timeout)
    }
    setTimeOutId(timeout);
  }, [fireConfetti, totalPrice]);

  useEffect(() => {
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
  }, [timeOutId]);

  const handlediscountFlag = () => {
    setDiscountFlag(false);
  };

  const handleOrder = () => {
    setConfirmOrder(true);
  };
  const handleOrderToFalse = (e) => {
    setConfirmOrder(false);
  };

  const handleOrderToOk = (e) => {
    console.log("ok");
  };

  const resetState = () => {
    setTotalPrice(0);
    setIds([]);
    setGroupedItems([]);
    setgetDiscount(0);
    setDiscountFlag(false);
    setRemoveDiscountFlag(false);
    setTimeOutId(null);
    setConfirmOrder(false);
  };

  const contextValue = useMemo(
    () => ({
      screenSize,
      totalPrice,
      setTotalPrice,
      groupedItems,
      ids,
      setIds,
      addItems,
      deleteItems,
      list,
      itemsCount,
      addTip,
      minusTip,
      tip,
      handlediscount,
      getDiscount,
      discountFlag,
      handlediscountFlag,
      removeDiscountFlag,
      handleRemovediscount,
      handleOrder,
      confirmOrder,
      handleOrderToFalse,
      handleOrderToOk,
      resetState,
      navbarHeight,
      setNavbarHeight,
      footerHeight,
      setFooterHeight,
    }),
    [
      screenSize,
      totalPrice,
      groupedItems,
      ids,
      addItems,
      deleteItems,
      list,
      itemsCount,
      addTip,
      minusTip,
      tip,
      handlediscount,
      getDiscount,
      discountFlag,
      removeDiscountFlag,
      handleRemovediscount,
      confirmOrder,
      navbarHeight,
      setNavbarHeight,
      footerHeight,
      setFooterHeight,
    ]
  );

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
