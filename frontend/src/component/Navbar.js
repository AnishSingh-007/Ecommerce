import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <h2>My Ecommerce</h2>
      </NavLink>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="#" activeClassName={styles.active}>Categories</NavLink>
          </li>
          <li>
            <NavLink to="#" activeClassName={styles.active}>Wishlist</NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName={styles.active}>Cart</NavLink>
          </li>
          <li>
            <NavLink to="#" activeClassName={styles.active}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
