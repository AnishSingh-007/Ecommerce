
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
// import dummyData from '../assets/dummyData';
import styles from './Home.module.css';

import axios from 'axios';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/app/v1/product"
        );
        if (response.status === 200) {
          console.log(response.data);
          
          setDummyData(response.data);

        } else {
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  // Get unique categories
  const categories = [...new Set(dummyData.map(product => product.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? dummyData.filter(product => product.category === selectedCategory)
    : dummyData;

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to our online store!</h1>
      <div className={styles.tabSelector}>
        <button
          className={`${styles.tab} ${selectedCategory === null ? styles.active : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.tab} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.productList}>
        {filteredProducts.map(product => (
            <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
