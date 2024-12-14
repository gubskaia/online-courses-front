import React from "react";

const styles = {
    bestsellerSection: {
        position: "relative",
        backgroundColor: "#ffffff",
        color: "black",
        padding: "3rem 5%",
        fontFamily: '"Poppins", sans-serif',
        minHeight: "100vh",
    },
    backgroundOverlay: {
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        height: "400px",
        background: "linear-gradient(135deg, #6a00f4, #9e4fff)",
        borderRadius: "2rem",
        zIndex: "1",
    },
    contentWrapper: {
        position: "relative",
        zIndex: "2",
        textAlign: "center",
    },
    header: {
        marginBottom: "2rem",
        padding: "3rem 0",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
        color: "#ffffff",
    },
    subtitle: {
        fontSize: "1rem",
        color: "#e0e0e0",
    },
    courseGrid: {
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        // marginTop: "0.5rem",
    },
    courseCard: {
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "300px",
    },
    image: {
        width: "100%",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
    },
    courseTitle: {
        fontSize: "1.2rem",
        fontWeight: "600",
        marginBottom: "0.5rem",
    },
    rating: {
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        marginBottom: "0.5rem",
        color: "#ffd700",
    },
    details: {
        fontSize: "0.9rem",
        color: "#555",
        marginBottom: "0.5rem",
    },
};

const BestsellerCourses: React.FC = () => {
    const courses = [
        {
            id: 1,
            title: "Mastering React Basics",
            image: "https://via.placeholder.com/300x200",
            rating: 4.8,
            students: 120,
            duration: "12h",
        },
        {
            id: 2,
            title: "Advanced Java Programming",
            image: "https://via.placeholder.com/300x200",
            rating: 4.7,
            students: 95,
            duration: "8h",
        },
        {
            id: 3,
            title: "UI/UX Design Fundamentals",
            image: "https://via.placeholder.com/300x200",
            rating: 4.9,
            students: 130,
            duration: "10h",
        },
    ];

    return (
        <section style={styles.bestsellerSection}>
            <div style={styles.backgroundOverlay}></div>
            <div style={styles.contentWrapper}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Bestseller Courses</h2>
                    <p style={styles.subtitle}>
                        Explore our most popular courses that students love.
                    </p>
                </div>
                <div style={styles.courseGrid}>
                    {courses.map((course) => (
                        <div key={course.id} style={styles.courseCard}>
                            <img
                                src={course.image}
                                alt={course.title}
                                style={styles.image}
                            />
                            <h3 style={styles.courseTitle}>{course.title}</h3>
                            <div style={styles.rating}>
                                {Array.from({ length: Math.round(course.rating) }).map(
                                    (_, i) => (
                                        <i
                                            key={i}
                                            className="fas fa-star"
                                            style={{ color: "#ffd700" }}
                                        ></i>
                                    )
                                )}
                                <span>({course.rating})</span>
                            </div>
                            <p style={styles.details}>{course.students} students</p>
                            <p style={styles.details}>{course.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestsellerCourses;
