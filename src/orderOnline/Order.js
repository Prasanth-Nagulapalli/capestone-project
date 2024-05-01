import React from "react";
import "./orderOnline.css";
import { LemonDessert } from "../utils/index";
import { Greeksalad } from "../utils/index";
import { bruchetta } from "../utils/index";

// import '../index.css'
const Order = () => {
  return (
    <section className="_max_width_center order_online">
      <div className="order_online_container">
        <header className="order_online_header">
          <p className="order_online_header_p">Order Your Favourite Food!</p>
        </header>

        <div className="order_online_search_container">
          <div className="order_online_search-bar">
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" className="order_online_search_input" />
          </div>

          <div className="order_online_btn_container">
            <button className="reserve_btn order_online_btn">Search</button>
          </div>
        </div>

        <div className="order_online_filter_btn_container">
          <button>All</button>
          <button>Break-fast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Specials</button>
        </div>

        <div className="order_online_card_container">
          <article class="order_online_card_main">
            <div class="order_online_card_content">
              <img src={LemonDessert} alt="lemon" />
              <div className="order_online_item_rating_container">
                <h3>Item Name</h3>
                <p>
                  4.5{" "}
                  <span className="order_online_rating_i">
                    <i className="fa-solid fa-star"></i>
                  </span>
                </p>
              </div>
            </div>
            <footer>
              <div class="order_online_card_price_btn_container">
                <div className="order_online_card_item_type">
                  <p>item type</p>
                </div>
                <div className="order_online_last_container">
                  <p class="order_online_item_price">$ 150 for one</p>
                  <button className="order_online_add_btn _BTN_">Add +</button>
                </div>
              </div>
            </footer>
          </article>

          <article class="order_online_card_main">
            <div class="order_online_card_content">
              <img src={bruchetta} alt="lemon" />
              <div className="order_online_item_rating_container">
                <h3>Item Name</h3>
                <p>
                  4.5{" "}
                  <span className="order_online_rating_i">
                    <i className="fa-solid fa-star"></i>
                  </span>
                </p>
              </div>
            </div>
            <footer>
              <div class="order_online_card_price_btn_container">
                <div className="order_online_card_item_type">
                  <p>item type</p>
                </div>
                <div className="order_online_last_container">
                  <p class="order_online_item_price">$ 150 for one</p>
                  <button className="order_online_add_btn _BTN_">Add +</button>
                </div>
              </div>
            </footer>
          </article>

          <article class="order_online_card_main">
            <div class="order_online_card_content">
              <img src={Greeksalad} alt="lemon" />
              <div className="order_online_item_rating_container">
                <h3>Item Name</h3>
                <p>
                  4.5{" "}
                  <span className="order_online_rating_i">
                    <i className="fa-solid fa-star"></i>
                  </span>
                </p>
              </div>
            </div>
            <footer>
              <div class="order_online_card_price_btn_container">
                <div className="order_online_card_item_type">
                  <p>item type</p>
                </div>
                <div className="order_online_last_container">
                  <p class="order_online_item_price">$ 150 for one</p>
                  <button className="order_online_add_btn _BTN_">Add +</button>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Order;
