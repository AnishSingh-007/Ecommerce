import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddProduct.module.css'; // Import CSS module for styling

function AddProduct() {
  const [formData, setFormData] = useState({
    id: '',
    category: '',
    title: '',
    description: '',
    price: '',
    oldPrice: '',
    inStock: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/app/v1/product/Admin/add-product', formData);
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className={styles.productFormContainer}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className={styles.productForm}>
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
        <input  name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
        <input  name="oldPrice" value={formData.oldPrice} onChange={handleChange} placeholder="Old Price" />
        <input  name="inStock" value={formData.inStock} onChange={handleChange} placeholder="In Stock" />
        <input type="submit" value="Add Product" className={styles.submitButton} />
      </form>
    </div>
  );
}

export default AddProduct;
