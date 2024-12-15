import React from 'react';
import styles from '/src/assets/styles/header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            {/* Logo and Platform Name */}
            <div className={styles.logoSection}>
                <img src="src/assets/logo.png" alt="Logo" className={styles.logo} />
                <span className={styles.platformName}>KnowHub</span>
            </div>

            {/* Search Section */}
            <div className={styles.searchSection}>
                <i className={`fas fa-search ${styles.searchIcon}`}></i>
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                    onFocus={(e) => (e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)')}
                    onBlur={(e) => (e.target.style.boxShadow = 'none')}
                />
            </div>

            {/* Navigation and Buttons */}
            <div className={styles.navSection}>
                <nav>
                    <a href="#home" className={styles.navLink}>Home</a>
                    <a href="#courses" className={styles.navLink}>Courses</a>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                </nav>
                <div>
                    <button className={styles.loginButton}>Log In</button>
                    <button className={styles.signUpButton}>Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
