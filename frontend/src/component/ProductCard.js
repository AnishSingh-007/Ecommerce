

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { useCart } from "../assets/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    // addToCart(product);
    const productId = product._id;
    const userDataString  = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);

      const userId = userData.user._id;
      console.log("inside if ",userData);
      console.log("inside if ",userId);

      const data = { productId, userId: userId };
     
      const response = await axios.post('http://localhost:8080/app/v1/user/add-to-cart', data)
      
  
      if (response.status === 200) {
          console.log(response.data);
      }
    } else {
      console.log("please login to add to cart");
    }
  };



  return (
    <div className={styles.card}>
    <div className={styles.imageDiv}>
      <NavLink
        to={`/product/${product.id}`}
        key={product.id}
        className={styles.navlink}
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className={styles.image}
        />
      </NavLink>
      </div>
      <div className={styles.details}>
        <NavLink
          to={`/product/${product.id}`}
          key={product.id}
          className={styles.navlink}
        >
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.category}>Category: {product.category}</p>
          <div className={styles.priceRating}>
            <p className={styles.price}>
              <span className={styles.previousPrice}>${product.oldPrice}</span>
              <span className={styles.discountedPrice}>${product.price}</span>
            </p>
            <div className={styles.rating}>Rating: {product.rating}/5</div>
          </div>
        </NavLink>
        <div className={styles.actions}>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className={styles.buyNow}>Buy Now</button>
        </div>
      </div>
      <FaHeart className={styles.heartIcon} />
    </div>
  );
};

export default ProductCard;
