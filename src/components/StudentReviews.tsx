import React from "react";

const styles = {
    reviewsSection: {
        backgroundColor: "#fdf8ff",
        padding: "3rem 5%",
        fontFamily: '"Poppins", sans-serif',
        minHeight: "85vh",
        position: "relative",
    },
    header: {
        textAlign: "center",
        marginBottom: "2rem",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "700",
        color: "#320046",
    },
    subtitle: {
        fontSize: "1rem",
        color: "#555",
    },
    reviewsWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem", // Increased gap between cards
        position: "relative",
        flexWrap: "wrap",
    },
    arrow: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },
    leftArrow: {
        left: "-2rem",
    },
    rightArrow: {
        right: "-2rem",
    },
    reviewCard: {
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        padding: "2rem 1.5rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "350px",
        textAlign: "left",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    quoteIcon: {
        position: "absolute",
        top: "1rem",
        left: "1rem",
        width: "60px", // Increased size to match avatar
        height: "60px", // Increased size to match avatar
        backgroundColor: "#9237d0",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontSize: "2rem", // Adjusted font size to fit inside the larger circle
    },
    avatar: {
        position: "absolute",
        top: "1rem", // Aligns vertically with the quote icon
        left: "3.5rem", // Slightly moved right so it overlaps with the quote icon
        width: "60px", // Same size as quote icon
        height: "60px", // Same size as quote icon
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #ffffff",
    },
    name: {
        fontSize: "1.1rem",
        fontWeight: "600",
        color: "#333",
        marginLeft: "8rem", // Adjusted to make sure the name starts after the photo
        marginBottom: "-0.4rem",
    },
    role: {
        fontSize: "0.9rem",
        color: "#777",
        marginLeft: "8rem",
        lineHeight: "0",// Adjusted to match the name's alignment
    },
    text: {
        fontSize: "0.9rem",
        color: "#555",
        lineHeight: "1.5",
        margin: "0.5rem 0",
    },
    rating: {
        color: "#ffd700",
        display: "flex",
        alignItems: "center",
        marginTop: "auto",
    },
};

const StudentReviews: React.FC = () => {
    const reviews = [
        {
            id: 1,
            name: "Kate Barton",
            role: "Founder and CEO",
            text: "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! Very good platform.",
            avatar: "/src/assets/girl.jpg",
            rating: 5,
        },
        {
            id: 2,
            name: "Tom Hurley",
            role: "Content Creator",
            text: "I highly recommend this course for all budding data scientists. Even people with no prior knowledge of visualization tools can become experts!",
            avatar: "https://via.placeholder.com/50",
            rating: 4.5,
        },
        {
            id: 3,
            name: "Surya M",
            role: "Senior Developer",
            text: "One of the best courses on management and leadership I have come across so far. Practical, engaging, and impactful! That`s amazing! Thanks to KnowHub!",
            avatar: "https://via.placeholder.com/50",
            rating: 5,
        },
    ];

    const handleArrowClick = (direction: "left" | "right") => {
        // Implement logic for navigating reviews
        console.log(`Arrow clicked: ${direction}`);
    };

    return (
        <section style={styles.reviewsSection}>
            <div style={styles.header}>
                <h2 style={styles.title}>Students Say About KnowHub</h2>
                <p style={styles.subtitle}>What our learners think about our courses?</p>
            </div>
            <div style={styles.reviewsWrapper}>
                <button
                    style={{ ...styles.arrow, ...styles.leftArrow }}
                    onClick={() => handleArrowClick("left")}
                >
                    ◀
                </button>
                {reviews.map((review) => (
                    <div key={review.id} style={styles.reviewCard}>
                        <div style={styles.quoteIcon}>“</div>
                        <img
                            src={review.avatar}
                            alt={review.name}
                            style={styles.avatar}
                        />
                        <h3 style={styles.name}>{review.name}</h3>
                        <p style={styles.role}>{review.role}</p>
                        <p style={styles.text}>{review.text}</p>
                        <div style={styles.rating}>
                            {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                                <i
                                    key={i}
                                    className="fas fa-star"
                                    style={{ color: "#ffd700" }}
                                ></i>
                            ))}
                        </div>
                    </div>
                ))}
                <button
                    style={{ ...styles.arrow, ...styles.rightArrow }}
                    onClick={() => handleArrowClick("right")}
                >
                    ▶
                </button>
            </div>
        </section>
    );
};

export default StudentReviews;
