import React, { useEffect, useState } from "react";
import { useScreenSize } from "../customHooks/ScreenSizeContext";
import { Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import { randomRange } from "../utils/functions";

const Cart = () => {
  const { totalPrice, deleteItems, addItems, list, itemsCount, tip } =
    useScreenSize();

  const [grandtot, setGrandtot] = useState(0);

  function calculatePercentage(percent, total) {
    return (percent / 100) * total;
  }

  useEffect(() => {
    let gst = calculatePercentage(5, totalPrice);

    setGrandtot(totalPrice + gst + 25 + tip);
  }, [tip, totalPrice]);

  if (list.length <= 0) {
    return <NoItems />;
  }

  return (
    <main className="cart_main _max_width_center">
      <header className="cart_main_header">
        <h1>Total Items ({itemsCount})</h1>
        <h1>{}</h1>
        <h1>Price</h1>
      </header>
      <section>
        <CartArticle
          list={list}
          deleteItems={deleteItems}
          addItems={addItems}
        />
      </section>
      <Footer grandtot={grandtot} />
      <CancelationPolicy />
      <>
        <ShowDiscountComponent />
        <PlaceOrderConfirmComponent />
      </>
    </main>
  );
};

export default Cart;

const NoItems = () => {
  return (
    <>
      <div className="cart_main_no_items _max_width_center">
        <div className="cart_main_empty">
          <span>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
          <h2>empty cart</h2>
        </div>
        <p>
          go to <Link to={"/orderonline"}> order online </Link> page to add
          Items
        </p>
      </div>
    </>
  );
};

const CartArticle = ({ list, addItems, deleteItems }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <article key={item.id} className="cart_article">
            <figure className="cart_figure">
              <img src={item.midImg} alt="item" className="cart_figure_img" />
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
        );
      })}
    </>
  );
};

const Footer = ({ grandtot }) => {
  return (
    <>
      <footer className="cart_footer_main">
        <Footer1 />
        <Footer2 grandtot={grandtot} />
      </footer>
    </>
  );
};

const Footer1 = () => {
  const { handleOrder, itemsCount } = useScreenSize();
  return (
    <>
      <div className="cart_footer_1">
        <div className="cart_footer_1_discount_card_container">
          <CouponCard />
          <div className="cart_place_order_btn_container" onClick={handleOrder}>
            <button className="cart_place_order_btn">
              Place Order {itemsCount} {itemsCount > 1 ? "items" : "item"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const CouponCard = () => {
  const { handlediscount, removeDiscountFlag, handleRemovediscount } =
    useScreenSize();
  return (
    <>
      <article className="cart_footer_1_card">
        <div className="cart_footer_1_text">
          <h3>Save @ 50% off With Dinner Deal 20</h3>
        </div>
        <div className="cart_footer_1_btn">
          {removeDiscountFlag ? (
            <button onClick={handleRemovediscount}>Remove</button>
          ) : (
            <button onClick={handlediscount}>Apply</button>
          )}
        </div>
        <p className="cart_footer_1_coupon_view_para">
          View all restaurant coupons
        </p>
      </article>
    </>
  );
};

const Footer2 = ({ grandtot }) => {
  const { tip, totalPrice, minusTip, addTip } = useScreenSize();

  return (
    <>
      <div className="cart_footer_2">
        <h1 className="cart_order_summary">Order Summary</h1>
        <div className="cart_footer_items_cal_container">
          <div>
            <h3>Total Price : </h3>
            <h3>{totalPrice}</h3>
          </div>
          <div>
            <h3>delivery charges :</h3>
            <h3>25/-</h3>
          </div>
          <div>
            <h3>GST 5%</h3>
            <h3>{((5 / 100) * totalPrice).toFixed(2)}</h3>
          </div>
          <div className="cart_add_tip_div">
            <h3>Add Tip :</h3>
            <h3 className="cart_add_tip_h3">
              <span className="cart_tip_btn_container">
                <button onClick={minusTip}>-</button>
                <span className="cart_tip_span">{tip}</span>
                <button onClick={addTip}>+</button>
              </span>
            </h3>
            {/* <h3 className="cart_add_tip_h3">
              <span className="cart_tip_span">{tip}</span>
              <span
                className="cart_tip_btn_container"
                // style={{
                //   left: tip < 10 ? "-4rem" : tip < 100 ? "-3.5rem" : "-3.1rem",
                // }}
                // style={{
                //   left: tip < 10 ? "-4rem" : tip < 100 ? "-3.5rem" : "-3.1rem",
                // }}
              >
                <button onClick={minusTip}>-</button>
                <button onClick={addTip}>+</button>
              </span>
            </h3> */}
          </div>
        </div>
        <section className="cart_footer_grand_total">
          <h2>Order Total: </h2>
          <h2>
            <span className="rupees">₹</span>
            {grandtot}
          </h2>
        </section>
      </div>
    </>
  );
};

const CancelationPolicy = () => {
  return (
    <>
      <div className="cancelation_policy">
        <div className="cancelation_policy_content">
          <h4>CANCELLATION POLICY</h4>
          <p>
            Help us reduce food waste by avodiding cancellations after placing
            your order. A 100% cancellation fee will be applied
          </p>
        </div>
      </div>
    </>
  );
};

const ShowDiscountComponent = () => {
  const { discountFlag, handlediscountFlag, getDiscount } = useScreenSize();
  return (
    <>
      <div
        onClick={handlediscountFlag}
        className={
          discountFlag ? "show_discount show_discount_comp" : "show_discount"
        }
      >
        <div className="show_discount_content_container">
          <h1>Coupon Applied</h1>
          <h2>
            {" "}
            &#127873; You saved{" "}
            <span className="saved_rupees">
              {" "}
              <span className="rupees">₹</span>
              {getDiscount}
            </span>{" "}
            rupees
          </h2>
          <span
            onClick={handlediscountFlag}
            className="show_discount_close_btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
      </div>
    </>
  );
};

const PlaceOrderConfirmComponent = () => {
  const { handleOrderToFalse, confirmOrder, handleOrderToOk, resetState } =
    useScreenSize();
  const [show, setShow] = useState(false);
  const [clearTimeOutId, setClearTimeOutId] = useState(null);
  const navigate = useNavigate();
  const handleOk = () => {
    let timeOut;
    setShow(true);
    handleOrderToOk();
    timeOut = setTimeout(() => {
      resetState();
      navigate("/orderonline");
    }, 6000);
    setClearTimeOutId(timeOut);
  };

  useEffect(() => {
    return () => {
      if (clearTimeOutId) {
        clearTimeout(clearTimeOutId);
      }
    };
  }, [clearTimeOutId]);

  return (
    <>
      <div
        className={
          confirmOrder
            ? "place_order_confirm_compo show_place_order_comp"
            : "place_order_confirm_compo"
        }
      >
        <div
          className="place_order_content_container"
          style={show ? null : { maxWidth: "386px" }}
        >
          {show ? (
            <OrderConfirmed />
          ) : (
            <>
              <h1>Are You Sure Confirm Order ?</h1>

              <div className="place_order_confirm_btn_container">
                <button onClick={handleOk}>Ok</button>
                <button onClick={handleOrderToFalse}>Cancel</button>
              </div>
            </>
          )}
          <span className="place_order_close_btn" onClick={handleOrderToFalse}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          {/*  */}
        </div>
      </div>
    </>
  );
};

const OrderConfirmed = () => {
  const [time] = useState(randomRange(20, 45));
  return (
    <section className="order_confirmed">
      <h2>
        {" "}
        <MdFastfood /> Your order has been confirmed ThankYou!
      </h2>
      <h1>Your food will be deliverd in {time} min </h1>

      <div className="order_text_animation_container">
        <div>&#128523;</div>
        <div>
          <span>Delicious moments</span>
        </div>
      </div>
    </section>
  );
};
