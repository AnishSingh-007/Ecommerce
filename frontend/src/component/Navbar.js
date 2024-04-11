// import React from "react";
// import { NavLink, Form, useRouteLoaderData } from "react-router-dom"; //, useNavigate

// import logo from "../assets/logo.svg";
// import playstore from "../assets/playstore.svg";
// import home from "../assets/home.svg";

// import classes from "./Navbar.module.css";

// function Navbar() {
//   return (
//     <ul className={classes.container}>

//       <li className={`${classes.item} ${classes.mainlogo}`}>
//         <img src={logo} alt="logoIcon" className={classes.logo} />
//         <h1>InstituteHub</h1>
//       </li>

//       <li className={`${classes.item}`}>
//         <NavLink to="/institutes" className={classes.InstituteLink}>
//           <p>product</p>
//         </NavLink>
//       </li>

//       <li className={classes.item}>
//         <NavLink
//           to="https://play.google.com/store/apps"
//           className={classes.playstoreLink}
//         >
//           <img
//             src={playstore}
//             alt="playstoreIcon"
//             className={classes.playstore}
//           />
//         </NavLink>
//       </li>

//       <li className={classes.item}>
//         <NavLink to="/" className={classes.homeLink}>
//           <img src={home} alt="HomeIcon" className={classes.home} />
//         </NavLink>
//       </li>

//       <li className={classes.item}>
//         <NavLink
//           to="/auth?mode=login"
//           className={`${classes.authButton} ${({ isActive }) =>
//             isActive ? classes.active : undefined}`}
//           end
//         >
//           Login
//         </NavLink>
//       </li>
//     </ul>
//   );
// }

// export default Navbar;


import React from 'react';
import { NavLink} from "react-router-dom"; //, useNavigat
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My Ecommerce</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li><NavLink to="#">Categories</NavLink></li>
          <li><NavLink to="#">Product</NavLink></li>
          <li><NavLink to="#">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
