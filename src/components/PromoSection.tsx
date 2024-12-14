import React from "react";

const styles = {
    section: {
        backgroundColor: "#4B0082",
        color: "#fff",
        borderRadius: "16px",
        padding: "32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "300px",
        width: "1300px",
        margin: "48px auto",
        overflow: "hidden",
    },
    leftSide: {
        width: "50%",
        textAlign: "left",
    },
    heading3: {
        color: "#FFD700",
        fontSize: "18px",
        marginBottom: "8px",
    },
    heading2: {
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "16px",
    },
    paragraph: {
        fontSize: "16px",
        marginBottom: "24px",
    },
    button: {
        backgroundColor: "#6A5ACD",
        color: "#fff",
        padding: "12px 24px",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
    },
    rightSide: {
        width: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end", // Ensure alignment at the bottom
        height: "128%", // Take the full height of the section
    },
    image: {
        width: "80%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "12px",
        display: "block",
    },
    discountBadge: {
        position: "absolute",
        top: "16px",
        right: "16px",
        backgroundColor: "#FF4500",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "50px",
        fontSize: "14px",
        fontWeight: "bold",
    },
};

const PromoSection: React.FC = () => {
    return (
        <section style={styles.section}>
            {/* Left Side */}
            <div style={styles.leftSide}>
                <h3 style={styles.heading3}>🎓 10,000+ Unique Courses</h3>
                <h2 style={styles.heading2}>Let’s Find The Right Course For You!</h2>
                <p style={styles.paragraph}>
                    Achieve your learning goals. With our expert tutors, your goals are
                    closer than ever!
                </p>
                <button style={styles.button}>Start Learning ➞</button>
            </div>

            {/* Right Side */}
            <div style={styles.rightSide}>
                {/* Image */}
                <img
                    src="/src/assets/students-main.png" // Update with your image path
                    alt="Promo Courses"
                    style={styles.image}
                />

                {/* Discount Badge */}
                <div style={styles.discountBadge}>BIG SALE! 30% OFF</div>
            </div>
        </section>
    );
};

export default PromoSection;
