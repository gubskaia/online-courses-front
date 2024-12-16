import React from "react";

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        padding: "4rem 5%",
        // background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
        borderRadius: "15px",
        // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: '"Poppins", sans-serif',
        height: "100vh", // Занимает всю высоту экрана
        overflow: "auto",
    },
    imageSection: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.1rem",
        position: "relative",
    },
    image: {
        width: "95%",
        height: "500px",
        borderRadius: "15px",
        filter: 'drop-shadow(0 0 70px rgba(171, 119, 215, 0.4))',
    },
    imageOffset: {
        marginTop: "59px",
        marginRight: "3rem",
    },
    card: {
        position: "absolute",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "1rem",
        fontWeight: "600",
        // color: "#910033",
    },
    cardIcon: {
        width: "40px",
        height: "40px",
    },
    cardText: {
        lineHeight: "1.2",
    },
    topCard: {
        top: "10%",
        left: "5%",
        transform: "translateY(-50%)",
    },
    bottomCard: {
        bottom: "70%",
        right: "10%",
        transform: "translateY(50%)",
    },
    textSection: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // color: "#004d91",
    },
    header: {
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem",
    },
    headerIcon: {
        backgroundColor: "#320854",
        padding: "0.3rem",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "1rem",
    },
    headerIconImg: {
        width: "24px",
        height: "24px",
    },
    headerText: {
        fontSize: "1rem",
        // color: "#002c5d",
    },
    title: {
        fontSize: "2.8rem",
        fontWeight: "700",
        lineHeight: "1.2",
        // color: "#003366",
        marginBottom: "1rem",
    },
    highlight: {
        color: "#320854",
    },
    description: {
        fontSize: "1.1rem",
        lineHeight: "1.8",
        marginBottom: "2rem",
        // color: "#002c5d",
    },
    featuresGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.2rem 1rem",
        marginBottom: "2rem",
    },
    featureItem: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontWeight: 'bold',
    },
    featureIconWrapper: {
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    featureIcon: {
        width: "16px",
        height: "16px",
    },
    featureText: {
        fontSize: "1rem",
        // color: "#004d91",
    },
    button: {
        display: "inline-block",
        background: "linear-gradient(135deg, #000000FF, #3c0c65)", // Dark purple gradient
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "50px",
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        cursor: "pointer",
        textDecoration: "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, background-color 0.3s ease",
    },
    buttonHover: {
        background: "linear-gradient(135deg, #320854, #4b0082)", // Reverse gradient on hover
        transform: "scale(1.05)",
    },
};

const InfoSection: React.FC = () => {
    return (
        <div style={styles.container}>
            {/* Image section with updated layout */}
            <div style={styles.imageSection}>
                <img
                    src="/src/assets/info3.png"
                    alt="Student Learning"
                    style={styles.image}
                />
                {/*<img*/}
                {/*    src="/src/assets/study2.jpg"*/}
                {/*    alt="Online Classes"*/}
                {/*    style={{ ...styles.image, ...styles.imageOffset }}*/}
                {/*/>*/}

                {/* Top card */}
                {/*<div style={{ ...styles.card, ...styles.topCard }}>*/}
                {/*    <img*/}
                {/*        src="/src/assets/reviews.png"*/}
                {/*        alt="Reviews"*/}
                {/*        style={styles.cardIcon}*/}
                {/*    />*/}
                {/*    <div>*/}
                {/*        <p style={styles.cardText}>35.3K+</p>*/}
                {/*        <p>Positive Reviews</p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Bottom card */}
                {/*<div style={{ ...styles.card, ...styles.bottomCard }}>*/}
                {/*    <img*/}
                {/*        src="/src/assets/experience.png"*/}
                {/*        alt="Experience"*/}
                {/*        style={styles.cardIcon}*/}
                {/*    />*/}
                {/*    <div>*/}
                {/*        <p style={styles.cardText}>20 Years</p>*/}
                {/*        <p>Of Experiences</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/* Text section (right) */}
            <div style={styles.textSection}>
                {/* Header */}
                <div style={styles.header}>
                    <div style={styles.headerIcon}>
                        <img
                            src="/src/assets/logo.png"
                            alt="About Icon"
                            style={styles.headerIconImg}
                        />
                    </div>
                    <p style={styles.headerText}>About Company</p>
                </div>

                {/* Title */}
                <h2 style={styles.title}>
                    Next Step Toward Your <br />
                    <span style={styles.highlight}>
                        Personal & Professional Goals
                    </span>
                </h2>

                {/* Description */}
                <p style={styles.description}>
                    Unlock your potential with KnownHub, your trusted partner for
                    achieving professional aspirations through innovative
                    learning solutions.
                </p>

                {/* Features */}
                <div style={styles.featuresGrid}>
                    {[
                        "Online remote learning",
                        "Audio performance",
                        "Expert trainers",
                        "Lifetime access",
                        "Video performance",
                        "Courses guidelines",
                    ].map((feature, index) => (
                        <div key={index} style={styles.featureItem}>
                            <div style={styles.featureIconWrapper}>
                                <img
                                    src={`/src/assets/checked.png`}
                                    alt="Feature Icon"
                                    style={styles.featureIcon}
                                />
                            </div>
                            <p style={styles.featureText}>{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <a href="#top" style={styles.button}>
                    Explore Courses
                </a>
            </div>
        </div>
    );
};

export default InfoSection;
