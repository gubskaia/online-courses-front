import React from 'react';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 5%',
        background: 'linear-gradient(135deg, #001d4d, #002f6c)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        fontFamily: '"Poppins", sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
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
    platformName: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'white',
    },
    navSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
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
    searchSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    searchInput: {
        padding: '8px 15px',
        borderRadius: '20px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        outline: 'none',
        transition: 'box-shadow 0.3s',
    },
    searchInputFocus: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    },
    loginButton: {
        padding: '8px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#0056b3',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            {/* Left section: logo and platform name */}
            <div style={styles.logoSection}>
                <img
                    src="src/assets/logo.png"
                    alt="Logo"
                    style={styles.logo}
                />
                <span style={styles.platformName}>KnownHub</span>
            </div>

            {/* Middle section: navigation links */}
            <nav style={styles.navSection}>
                <a href="#home" style={styles.navLink}>Home</a>
                <a href="#courses" style={styles.navLink}>Courses</a>
                <a href="#about" style={styles.navLink}>About</a>
                <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>

            {/* Right section: search input and login button */}
            <div style={styles.searchSection}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={styles.searchInput}
                />
                <button style={styles.loginButton}>Login</button>
            </div>
        </header>
    );
};

export default Header;
