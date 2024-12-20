import React from "react";
import styles from "/src/assets/styles/LoginForm.module.css";
import { FaEnvelope, FaLock } from "react-icons/fa";

const SignInForm: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                {/* Логотип */}
                <div className={styles.logo}>
                    <div className={styles.logoIcon}></div>
                </div>

                {/* Заголовок */}
                <h2 className={styles.title}>Log in to continue</h2>
                <p className={styles.subtitle}>
                    Please log in to start your rental application
                </p>

                {/* Форма */}
                <form className={styles.form}>
                    {/* Поле Email */}
                    <div className={styles.inputGroup}>
                        <FaEnvelope className={styles.icon} />
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                            required
                        />
                    </div>

                    {/* Поле Password */}
                    <div className={styles.inputGroup}>
                        <FaLock className={styles.icon} />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                            required
                        />
                    </div>

                    {/* Кнопка Sign In */}
                    <button type="submit" className={styles.signInButton}>
                        Sign In
                    </button>
                </form>

                {/* Альтернативные способы входа */}
                <p className={styles.orText}>Or continue with</p>
                <div className={styles.socialButtons}>
                    <button className={styles.socialButton}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                            alt="Google"
                        />
                    </button>
                    <button className={styles.socialButton}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                            alt="Facebook"
                        />
                    </button>
                    <button className={styles.socialButton}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/831/831276.png"
                            alt="Apple"
                        />
                    </button>
                </div>

                {/* Подпись */}
                <p className={styles.footerText}>
                    Don’t have an account? <a href="#" className={styles.signUpLink}>Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default SignInForm;
