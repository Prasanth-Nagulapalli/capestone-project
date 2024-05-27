import React, { useEffect, useState } from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import fooditems from "../utils/foodItems";
import "../styles/cart.css";
const Cart = () => {
  const { totalPrice, ids,groupedItems } = useScreenSize();

  let [list, setList] = useState([]);
  let [itemsCount, setItemsCount] = useState(0);
  const {deleteItems, addItems} = useScreenSize()
  

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
  }, [groupedItems, ids,deleteItems, addItems,totalPrice]);
  
  console.log(groupedItems);
  
  useEffect(() => {
    let count = list.map((item) => {
      return item.values.length;
    });
    if (count) {
      let total = count.reduce((acc, curren) => acc + curren, 0);
      setItemsCount(total);
    }
  }, [list,addItems]);




  // useEffect(() => {
  //   if (ids.length > 0) {
  //     const updatedList = ids
  //       .map((id) => {
  //         return fooditems.find((item) => item.id === id);
  //       })
  //       .filter((item) => item !== undefined); // Ensure no undefined items are added

  //     setList(updatedList);
  //   } else {
  //     setList([]);
  //   }
  // }, [ids]);
 

 console.log(list);

  return (
    <main className="cart_main _max_width_center">
      <header className="cart_main_header">
        <h1>Total Items ({itemsCount})</h1>
      </header>
      <section>
        {list.map((item) => {
          return(
            <article key={item.id} className="cart_article">
            <figure className="cart_figure">
                 <img src={item.midImg}  alt="item" className="cart_figure_img"/>
              </figure>
            <section className="cart_section_1">
              <h2>{item.title}</h2>
              <p>{item.type}</p>
              <div className="cart_btn_container">
                  <button
                    className=""
                    onClick={() => {
                      deleteItems(item.price, item.id);
                      
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <span>{item.values.length}</span>

                  <button
                    className=""
                    onClick={() => {
                      addItems(item.price, item.id);
                      
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
            </section>
            <section className="cart_section_2">
              <h3>₹ {item.price}</h3>
            </section>
            </article>
          )
        })}
        <p>{totalPrice}</p>
      </section>
    </main>
  );
};

export default Cart;
