
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import dummyData from '../assets/dummyData';
import styles from './Home.module.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
