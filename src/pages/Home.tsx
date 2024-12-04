import React from 'react';
import StatsSection from "../components/StatsSection.tsx";
import InfoSection from "../components/InfoSection.tsx";

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '92vh',
        padding: '0 5%',
        background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
        fontFamily: '"Poppins", sans-serif',
        overflow: 'hidden',
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
        background: 'linear-gradient(90deg, #003366, #0066cc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'left',
    },
    description: {
        fontSize: '1.2rem',
        color: '#004d91',
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
        backgroundColor: '#007ac1',
        color: 'white',
    },
    buttonHover: {
        backgroundColor: '#004d91', // Darker blue
        transform: 'scale(1.05)',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 30px rgba(173, 216, 230, 0.7)) drop-shadow(0 0 50px rgba(0, 204, 255, 0.6)) drop-shadow(0 0 70px rgba(0, 153, 255, 0.4))',
    },
    infoCard: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '15px',
        padding: '1.5rem',
        boxShadow: '0 0 20px rgba(173, 216, 230, 0.6)',
        textAlign: 'center',
        fontSize: '1rem',
        color: '#004d91',
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
                        <button
                            style={{ ...styles.button }}
                        >
                            Explore Courses
                        </button>
                        <button
                            style={{ ...styles.button }}
                        >
                            Get Unlimited Learning
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div style={styles.rightSection}>
                    <img
                        src="src/assets/planet.png"
                        alt="Students"
                        style={styles.image}
                    />
                    {/* Card 1 */}
                    <div style={{ ...styles.infoCard, ...styles.card1 }}>
                        <div style={styles.cardIconWrapper}>
                            <img
                                src="src/assets/gear-dark.png"
                                alt="Card Icon"
                                style={styles.cardIcon}
                            />
                        </div>
                        <p>Remote learning</p>
                    </div>
                    {/* Card 2 */}
                    <div style={{ ...styles.infoCard, ...styles.card2 }}>
                        <div style={styles.cardIconWrapper}>
                            <img
                                src="src/assets/open-book-dark.png"
                                alt="Card Icon"
                                style={styles.cardIcon}
                            />
                        </div>
                        <p>Courses guidelines</p>
                    </div>
                    {/* Card 3 */}
                    <div style={{ ...styles.infoCard, ...styles.card3 }}>
                        <div style={styles.cardIconWrapper}>
                            <img
                                src="src/assets/university-dark.png"
                                alt="Card Icon"
                                style={styles.cardIcon}
                            />
                        </div>
                        <p>Expert trainers</p>
                    </div>
                </div>
            </div>
            <StatsSection />
            <InfoSection />
        </div>
    );
};

export default Home;
