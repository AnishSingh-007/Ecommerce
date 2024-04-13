import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";




const Navbar = () => {
  const user  = localStorage.getItem('token');

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  // Redirect the user to the login page
  window.location.href = "/login"; // You need to set the href property to navigate to the login page
}

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <h2>My Ecommerce</h2>
      </NavLink>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="Admin/add-product" activeClassName={styles.active}>Add product</NavLink>
          </li>
          {/*
          <li>
          <NavLink to="#" activeClassName={styles.active}>Wishlist</NavLink>
          </li>
        */}
          <li>
            <NavLink to="/cart" activeClassName={styles.active}>Cart</NavLink>
          </li>
          {user ?
            <li>
              <span onClick={handleLogout} activeClassName={styles.active}>Logout</span>
            </li> :
            <li>
            <NavLink to="/login" activeClassName={styles.active}>Login</NavLink>
          </li>
          }

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
