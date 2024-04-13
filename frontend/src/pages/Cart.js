

import React from "react";
import { useCart } from "../assets/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate total price, total discounted price, and savings
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalDiscountedPrice = cartItems.reduce(
    (total, item) => item.oldPrice - total,
    0
  );
  const savings = totalPrice - totalDiscountedPrice;
  const deliveryCharges = 50; // Assuming fixed delivery charges

  const handleBuyNow = () => {
    // Add logic to handle the "Buy Now" action, such as navigating to checkout page
    console.log("Buy Now button clicked!");
  };

  return (
    <div className={styles.cartPage}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.productImage}
                />
                <div className={styles.productDetails}>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>
                    Discounted Price: ${(item.oldPrice - item.price).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.buyNowButton}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Discounted Price: ${(totalDiscountedPrice).toFixed(2)}</p>
            <p>Delivery Charges: ${deliveryCharges.toFixed(2)}</p>
            <p>You will save: ${savings.toFixed(2)} on this order.</p>
            <div className={styles.buttons}>
              <button className={styles.buyNowButton} onClick={clearCart}>Clear Cart</button>
              <button className={styles.buyNowButton} onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
