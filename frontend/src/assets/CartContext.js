// // CartContext.js
// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };



import React, { createContext, useContext, useState } from "react";

// Create context for cart
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to check if a product is already in the cart
  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // Function to add product to cart
  const addToCart = (product) => {
    // Check if product is already in cart
    if (isProductInCart(product.id)) {
      alert("This product is already in your cart!");
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Function to clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
