import React from "react";

const styles = {
    footer: {
        backgroundColor: "#000000",
        color: "white",
        padding: "2rem 5%",
        fontFamily: '"Poppins", sans-serif',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
    },
    leftSection: {
        flex: "10 10 40%",
        minWidth: "250px",
    },
    logo: {
        fontSize: "1.5rem",
        fontWeight: "700",
        marginBottom: "1rem",
    },
    description: {
        fontSize: "0.9rem",
        color: "#ffffff",
        marginBottom: "1rem",
    },
    socialIcons: {
        display: "flex",
        gap: "1rem",
        marginTop: "0.5rem",
    },
    icon: {
        fontSize: "1.5rem",
        color: "white",
        transition: "color 0.3s ease",
        cursor: "pointer",
    },
    rightSection: {
        flex: "1 1 55%",
        minWidth: "300px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
    },
    linksColumn: {
        flex: "1 1 22%",
        minWidth: "120px",
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
    },
    linkTitle: {
        fontSize: "1rem",
        fontWeight: "600",
        marginBottom: "0.5rem",
    },
    link: {
        fontSize: "0.9rem",
        color: "#ffffff",
        textDecoration: "none",
        cursor: "pointer",
        transition: "color 0.3s ease",
    },
    bottomRow: {
        marginTop: "2rem",
        width: "100%",
        borderTop: "1px solid #444",
        paddingTop: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: "0.9rem",
        color: "#ffffff",
    },
    copyright: {
        textAlign: "center",
    },
};

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            {/* Left Section */}
            <div style={styles.leftSection}>
                <div style={styles.logo}>KnowHub</div>
                <p style={styles.description}>
                    Study hard what interests you the most in the most undisciplined,<br/>
                    irreverent, and original manner possible.
                </p>
                <div style={styles.socialIcons}>
                    <i style={styles.icon} className="fab fa-facebook-f"></i>
                    <i style={styles.icon} className="fab fa-twitter"></i>
                    <i style={styles.icon} className="fab fa-instagram"></i>
                    <i style={styles.icon} className="fab fa-pinterest"></i>
                </div>
            </div>

            {/* Right Section */}
            <div style={styles.rightSection}>
                <div style={styles.linksColumn}>
                    <h4 style={styles.linkTitle}>Categories</h4>
                    <a href="#" style={styles.link}>Web Design</a>
                    <a href="#" style={styles.link}>Development</a>
                    <a href="#" style={styles.link}>Sales Marketing</a>
                    <a href="#" style={styles.link}>IT & Software</a>
                    <a href="#" style={styles.link}>Business & Finance</a>
                </div>
                <div style={styles.linksColumn}>
                    <h4 style={styles.linkTitle}>Company</h4>
                    <a href="#" style={styles.link}>About Us</a>
                    <a href="#" style={styles.link}>Careers</a>
                    <a href="#" style={styles.link}>News</a>
                    <a href="#" style={styles.link}>Media Kit</a>
                    <a href="#" style={styles.link}>Contact</a>
                </div>
                <div style={styles.linksColumn}>
                    <h4 style={styles.linkTitle}>Resources</h4>
                    <a href="#" style={styles.link}>Blog</a>
                    <a href="#" style={styles.link}>Help Center</a>
                    <a href="#" style={styles.link}>Tutorials</a>
                    <a href="#" style={styles.link}>Support</a>
                    <a href="#" style={styles.link}>Services</a>
                </div>
                <div style={styles.linksColumn}>
                    <h4 style={styles.linkTitle}>Contact</h4>
                    <p style={styles.link}>+1834 123 456 789</p>
                    <p style={styles.link}>knowhub@gmail.com</p>
                    <p style={styles.link}>5609 E Sprague Ave, Spokane Valley, WA 99212, USA</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div style={styles.bottomRow}>
                <div style={styles.copyright}>
                    Copyright © 2024 KnowHub. All rights reserved.
                </div>
                <div>
                    <a href="#" style={styles.link}>Privacy Policy</a>
                    <span> | </span>
                    <a href="#" style={styles.link}>Terms and Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
