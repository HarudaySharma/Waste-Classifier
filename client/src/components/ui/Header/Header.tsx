import React from "react";
import styles from "./Header.module.scss"
import logo from '../../../assets/logo.png'
import icon from '../../../assets/address-book.png'

const Header = () => {
    return (
        <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo}/>
        </div>

        <div className={styles.navButtons}>
            <button className={styles.navButton}>Home</button>
            <button className={styles.navButton}>Info</button>
            <button className={styles.navButton}>Goals</button>
            <button className={styles.navButton}>About Us</button>
            <button className={styles.navButton}>
              <img src={icon} alt="Contact Icon" className={styles.icon} />
            </button>
        </div>

    </nav>
    )
}

export default Header;
