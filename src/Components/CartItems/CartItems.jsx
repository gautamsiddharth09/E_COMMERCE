import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItem, RemoveCart,getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      {/* Header */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt={e.name}
                  className="carticon-product-icon"
                />
                <p className="product-name">{e.name}</p>
                <p className="price">${e.new_price}</p>
                <span className="cartitems-quantity">
                  {cartItem[e.id]}
                </span>
                <p className="price">
                  ${(e.new_price * cartItem[e.id]).toFixed(2)}
                </p>
                <img
                  src={remove_icon}
                  alt="Remove item"
                  onClick={() => RemoveCart(e.id)}
                  className="cartitems-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Bottom Section */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>

          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />

          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />

          <div className="cartitems-total-item total-bold">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>

          <button className="checkout-btn">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
