import React from 'react';
import StatsSection from "../components/StatsSection.tsx";
import InfoSection from "../components/InfoSection.tsx";
import PopularCoursesSection from "../components/PopularCoursesSection.tsx";
import BestsellerCourses from "../components/BestsellerCourses.tsx";
import StudentReviews from "../components/StudentReviews.tsx";
import FAQSection from "../components/FAQSection.tsx";
import PromoSection from "../components/PromoSection.tsx";

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '92vh',
        padding: '0 6%',
        fontFamily: '"Poppins", sans-serif',
        overflow: 'hidden',
        position: 'relative',
    },
    leftSection: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '5%',
    },
    rightSection: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        fontSize: '5rem',
        fontWeight: 700,
        lineHeight: '1.1',
        marginBottom: '1rem',
        background: 'linear-gradient(90deg, #0b0c10, #c67ae5)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'left',
        animation: 'gradientShift 5s infinite',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
        lineHeight: '1.6',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem',
    },
    button: {
        padding: '15px 30px',
        fontSize: '1rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        width: '270px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkButton: {
        backgroundColor: '#333333',  // Dark background
        color: 'white',
    },
    transparentButton: {
        backgroundColor: 'transparent', // Transparent background
        color: '#5d1f77',  // Light text color
        border: '2px solid #5d1f77', // Light border color
    },
    buttonHover: {
        ':hover': {
            transform: 'scale(1.05)',
        },
    },
    arrow: {
        marginLeft: '10px',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
        animation: 'float 8s infinite ease-in-out',
    },
    infoCard: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '15px',
        padding: '1.5rem',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
        fontSize: '1rem',
        maxWidth: '220px',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    cardIconWrapper: {
        position: 'absolute',
        top: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardIcon: {
        width: '40px',
        height: '40px',
    },
    card1: {
        top: '8%',
        left: '45%',
    },
    card2: {
        bottom: '25%',
        right: '0%',
    },
    card3: {
        top: '45%',
        left: '0%',
    },
};

const Home: React.FC = () => {
    return (
        <div>
            {/*<style>*/}
            {/*    {`*/}
            {/*        @keyframes float {*/}
            {/*            0%, 100% {*/}
            {/*                transform: translateY(0);*/}
            {/*            }*/}
            {/*            50% {*/}
            {/*                transform: translateY(-15px);*/}
            {/*            }*/}
            {/*        }*/}

            {/*        @keyframes gradientShift {*/}
            {/*            0%, 100% {*/}
            {/*                background-position: 0% 50%;*/}
            {/*            }*/}
            {/*            50% {*/}
            {/*                background-position: 100% 50%;*/}
            {/*            }*/}
            {/*        }*/}
            {/*    `}*/}
            {/*</style>*/}
            <div style={styles.container}>
                {/* Left Section */}
                <div style={styles.leftSection}>
                    <h1 style={styles.title}>
                        Education & <br />
                        Online Courses
                    </h1>
                    <p style={styles.description}>
                        Unlock your potential with our innovative learning platform. Access top-tier courses and expert guidance to elevate your knowledge and skills.
                    </p>
                    <div style={styles.buttonGroup}>
                        <button style={{ ...styles.button, ...styles.darkButton, ...styles.buttonHover }}>
                            Explore Courses
                        </button>
                        <button style={{ ...styles.button, ...styles.transparentButton, ...styles.buttonHover }}>
                            Contact Us
                            <span style={styles.arrow}>→</span>
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div style={styles.rightSection}>
                    <img
                        src="src/assets/planet-home.png"
                        alt="Students"
                        style={styles.image}
                    />
                    {/* Card 1 */}
                    {/*<div style={{ ...styles.infoCard, ...styles.card1 }}>*/}
                    {/*    <div style={styles.cardIconWrapper}>*/}
                    {/*        <img*/}
                    {/*            src="src/assets/gear-dark.png"*/}
                    {/*            alt="Card Icon"*/}
                    {/*            style={styles.cardIcon}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <p>Remote learning</p>*/}
                    {/*</div>*/}
                    {/*/!* Card 2 *!/*/}
                    {/*<div style={{ ...styles.infoCard, ...styles.card2 }}>*/}
                    {/*    <div style={styles.cardIconWrapper}>*/}
                    {/*        <img*/}
                    {/*            src="src/assets/open-book-dark.png"*/}
                    {/*            alt="Card Icon"*/}
                    {/*            style={styles.cardIcon}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <p>Courses guidelines</p>*/}
                    {/*</div>*/}
                    {/*/!* Card 3 *!/*/}
                    {/*<div style={{ ...styles.infoCard, ...styles.card3 }}>*/}
                    {/*    <div style={styles.cardIconWrapper}>*/}
                    {/*        <img*/}
                    {/*            src="src/assets/university-dark.png"*/}
                    {/*            alt="Card Icon"*/}
                    {/*            style={styles.cardIcon}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <p>Expert trainers</p>*/}
                    {/*</div>*/}
                </div>
            </div>
            <StatsSection />
            <InfoSection />
            {/*<PopularCoursesSection />*/}
            <BestsellerCourses />
            <PromoSection />
            <StudentReviews />
            <FAQSection />
        </div>
    );
};

export default Home;
