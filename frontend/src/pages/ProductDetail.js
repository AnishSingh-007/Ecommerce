// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import dummyData from '../assets/dummyData';
// import styles from './ProductDetail.module.css';

// const ProductDetailPage = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Find the product with the given ID
//   useEffect(() => {
//     const foundProduct = dummyData.find(product => product.id === parseInt(productId));
//     setProduct(foundProduct);
//   }, [productId]);

//   // Change image after every 2 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex(prevIndex =>
//         prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, [product]);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className={styles.productDetail}>
//       <img
//         src={product.images[currentImageIndex]}
//         alt={`${product.title} - Image ${currentImageIndex + 1}`}
//         className={styles.image}
//       />
//       <div className={styles.details}>
//         <h2 className={styles.title}>{product.title}</h2>
//         <p className={styles.category}>Category: {product.category}</p>
//         <p className={styles.description}>{product.description}</p>
//         <p className={styles.price}>Price: ${product.price}</p>
//         <button className={styles.addToCart}>Add to Cart</button>
//         <button className={styles.buyNow}>Buy Now</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import dummyData from "../assets/dummyData";
import styles from "./ProductDetail.module.css";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../assets/CartContext";

import axios from "axios";


const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/app/v1/product/${productId}`
        );
        if (response.status === 200) {
          console.log(response.data);
          
          setProduct(response.data);

        } else {
          console.error("Failed to fetch product ");
        }
      } catch (error) {
        console.error("Error fetching product :", error);
      }
    };

    fetchProduct();
  }, []);

  // useEffect(() => {
  //   const foundProduct = dummyData.find(
  //     (product) => product.id === parseInt(productId)
  //   );
  //   setProduct(foundProduct);
  // }, [productId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [product]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // const handleAddToCart = () => {
  //   if (product) {
  //     addToCart(product);
  //   }
  // };

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

  const handleBuyNow = () => {
    // Add logic to proceed with buying the product
    console.log("Product bought:", product);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.imageContainer}>
        <img
          src={product.images[currentImageIndex]}
          alt={`${product.title} - Image ${currentImageIndex + 1}`}
          className={styles.image}
        />
        <button className={styles.prevButton} onClick={prevImage}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={nextImage}>
          &#10095;
        </button>
        <div className={styles.dots}>
          {product.images.map((image, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentImageIndex ? styles.active : ""
              }`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
        <FaHeart className={styles.heartIcon} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.category}>Category: {product.category}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.priceRating}>
        <p className={styles.price}>Price: ${product.price}</p>
        <div className={styles.rating}>
        Rating: {product.rating}/5
        </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className={styles.buyNow} onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
