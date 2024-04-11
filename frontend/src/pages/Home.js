import React from 'react';
import ProductCard from '../component/ProductCard';
import dummyData from '../assets/dummyData';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to our online store!</h1>
      <div className={styles.productList}>
        {dummyData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
