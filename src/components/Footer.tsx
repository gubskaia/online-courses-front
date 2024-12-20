import React from "react";
import styles from "/src/assets/styles/Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <div className={styles.logo}>KnowHub</div>
                <p className={styles.description}>
                    Study hard what interests you the most in the most undisciplined,<br />
                    irreverent, and original manner possible.
                </p>
                <div className={styles.socialIcons}>
                    <i className={`${styles.icon} fab fa-facebook-f`}></i>
                    <i className={`${styles.icon} fab fa-twitter`}></i>
                    <i className={`${styles.icon} fab fa-instagram`}></i>
                    <i className={`${styles.icon} fab fa-pinterest`}></i>
                </div>
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                <div className={styles.linksColumn}>
                    <h4 className={styles.linkTitle}>Categories</h4>
                    <a href="#" className={styles.link}>Web Design</a>
                    <a href="#" className={styles.link}>Development</a>
                    <a href="#" className={styles.link}>Sales Marketing</a>
                    <a href="#" className={styles.link}>IT & Software</a>
                    <a href="#" className={styles.link}>Business & Finance</a>
                </div>
                <div className={styles.linksColumn}>
                    <h4 className={styles.linkTitle}>Company</h4>
                    <a href="#" className={styles.link}>About Us</a>
                    <a href="#" className={styles.link}>Careers</a>
                    <a href="#" className={styles.link}>News</a>
                    <a href="#" className={styles.link}>Media Kit</a>
                    <a href="#" className={styles.link}>Contact</a>
                </div>
                <div className={styles.linksColumn}>
                    <h4 className={styles.linkTitle}>Resources</h4>
                    <a href="#" className={styles.link}>Blog</a>
                    <a href="#" className={styles.link}>Help Center</a>
                    <a href="#" className={styles.link}>Tutorials</a>
                    <a href="#" className={styles.link}>Support</a>
                    <a href="#" className={styles.link}>Services</a>
                </div>
                <div className={styles.linksColumn}>
                    <h4 className={styles.linkTitle}>Contact</h4>
                    <p className={styles.link}>+1834 123 456 789</p>
                    <p className={styles.link}>knowhub@gmail.com</p>
                    <p className={styles.link}>
                        5609 E Sprague Ave, Spokane Valley, WA 99212, USA
                    </p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className={styles.bottomRow}>
                <div className={styles.copyright}>
                    Copyright © 2024 KnowHub. All rights reserved.
                </div>
                <div>
                    <a href="#" className={styles.link}>Privacy Policy</a>
                    <span> | </span>
                    <a href="#" className={styles.link}>Terms and Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
