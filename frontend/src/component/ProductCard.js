// import React from 'react';
// import styles from './ProductCard.module.css';
// // import product from '../assets/dummyData'

// const ProductCard = ({ product }) => {
//   return (
//     <div className={styles.card}>
//       <img src={product.image} alt={product.name} className={styles.image} />
//       <div className={styles.details}>
//         <h2 className={styles.name}>{product.name}</h2>
//         <p className={styles.category}>Category: {product.category}</p>
//         <p className={styles.price}>
//           <span className={styles.previousPrice}>${product.previousPrice}</span>
//           <span className={styles.discountedPrice}>${product.discountedPrice}</span>
//         </p>
//         <button className={styles.addToWishlist}>Add to Wishlist</button>
//         <div className={styles.rating}>
//           Rating: {product.rating}/5
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import styles from "./ProductCard.module.css";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.category}>Category: {product.category}</p>
        <div className={styles.priceRating}>
        <p className={styles.price}>
        <span className={styles.previousPrice}>${product.oldPrice}</span>
        <span className={styles.discountedPrice}>${product.price}</span>
        </p>
        <div className={styles.rating}>
          Rating: {product.rating}/5
        </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.addToCart}>Add to Cart</button>
          <button className={styles.buyNow}>Buy Now</button>
        </div>
      </div>
      <FaHeart className={styles.heartIcon} />
    </div>
  );
};

export default ProductCard;
