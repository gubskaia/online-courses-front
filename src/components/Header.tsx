import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '/src/assets/styles/header.module.css';

const Header: React.FC = () => {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <header className={styles.header}>
            {/* Logo and Platform Name */}
            <div
                className={styles.logoSection}
                onClick={() => navigate('/')} // Логотип ведет на главную страницу
                style={{ cursor: 'pointer' }} // Указатель курсора
            >
                <img src="../assets/img/logo.png" alt="Logo" className={styles.logo} />
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
                    {/* Используем навигацию для переходов */}
                    <a
                        onClick={() => navigate('/')} // Главная страница
                        className={styles.navLink}
                    >
                        Home
                    </a>
                    <a
                        onClick={() => navigate('/courses')} // Курсы
                        className={styles.navLink}
                    >
                        Courses
                    </a>
                    <a
                        onClick={() => navigate('/about')} // О нас
                        className={styles.navLink}
                    >
                        About
                    </a>
                    <a
                        onClick={() => navigate('/contact')} // Контакты
                        className={styles.navLink}
                    >
                        Contact
                    </a>
                </nav>
                <div>
                    <button
                        className={styles.loginButton}
                        onClick={() => navigate('/login')} // Логин
                    >
                        Log In
                    </button>
                    <button
                        className={styles.signUpButton}
                        onClick={() => navigate('/signup')} // Регистрация
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
