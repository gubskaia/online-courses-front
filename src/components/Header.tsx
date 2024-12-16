import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 5%',
        background: 'linear-gradient(135deg, #001d4d, #002f6c)',
        fontFamily: '"Poppins", sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        color: 'white',
    },
    logoSection: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '40px',
        height: '40px',
        marginRight: '10px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        fontSize: '1rem',
        fontWeight: 500,
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s',
    },
    navLinkHover: {
        color: '#f0f0f0',
    },
    searchInput: {
        padding: '8px 15px',
        borderRadius: '20px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        outline: 'none',
        transition: 'box-shadow 0.3s',
    },
};
import styles from '/src/assets/styles/header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            {/* Logo and Platform Name */}
            <div className={styles.logoSection}>
                <img src="src/assets/logo.png" alt="Logo" className={styles.logo} />
                <span className={styles.platformName}>KnowHub</span>
            </div>
            <nav style={headerStyles.nav}>
                <Link to="/" style={headerStyles.navLink}>
                    Home
                </Link>
                <Link to="/courses" style={headerStyles.navLink}>
                    Courses
                </Link>
                <Link to="/about" style={headerStyles.navLink}>
                    About
                </Link>
                <Link to="/contact" style={headerStyles.navLink}>
                    Contact
                </Link>
            </nav>
            <input
                type="text"
                placeholder="Search..."
                style={headerStyles.searchInput}
            />

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
