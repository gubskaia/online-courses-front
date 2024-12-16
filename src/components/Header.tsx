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

const Header: React.FC = () => {
    return (
        <header style={headerStyles.header}>
            <div style={headerStyles.logoSection}>
                <img src="/src/assets/logo.png" alt="Logo" style={headerStyles.logo} />
                <span>KnownHub</span>
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
        </header>
    );
};

export default Header;
