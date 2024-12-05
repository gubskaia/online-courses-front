import React, { useState } from "react";

const styles = {
    container: {
        padding: "4rem 5%",
        backgroundColor: "#f9f9f9",
        fontFamily: '"Poppins", sans-serif',
        textAlign: "center",
    },
    sectionTitle: {
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: "2rem",
        color: "#004d91",
    },
    categoryMenu: {
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        marginBottom: "2rem",
    },
    categoryButton: {
        padding: "0.8rem 2rem",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#e0f7fa",
        color: "#004d91",
        borderRadius: "50px",
        cursor: "pointer",
        border: "none",
        transition: "background-color 0.3s ease",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    activeCategoryButton: {
        backgroundColor: "#007ac1",
        color: "white",
    },
    coursesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        justifyItems: "center",
    },
    courseCard: {
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: "white",
        textAlign: "left",
        transition: "transform 0.2s ease-in-out",
    },
    courseCardHover: {
        transform: "scale(1.05)",
    },
    courseImage: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
    },
    courseInfo: {
        padding: "1rem",
    },
    courseTitle: {
        fontSize: "1.2rem",
        fontWeight: "600",
        marginBottom: "0.5rem",
        color: "#003366",
    },
    courseDetails: {
        fontSize: "0.9rem",
        color: "#555",
        marginBottom: "1rem",
    },
    coursePrice: {
        fontSize: "1rem",
        fontWeight: "600",
        color: "#007ac1",
    },
    starRating: {
        display: "flex",
        gap: "0.2rem",
        color: "#ffd700",
    },
    star: {
        width: "16px",
        height: "16px",
    },
};

const PopularCoursesSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Courses");

    const courses = {
        "All Courses": [
            {
                title: "The Digital Learning Experience",
                category: "Business Office",
                image: "/src/assets/background1.jpg",
                lessons: 9,
                students: 5,
                reviews: 0,
                price: "$49.99",
                rating: 4.5,
            },
            {
                title: "The Rise of Online Education Education",
                category: "Learning",
                image: "/src/assets/background1.jpg",
                lessons: 14,
                students: 1,
                reviews: 1,
                price: "$59.99",
                rating: 4.0,
            },
            {
                title: "The Evolution of Modern Education",
                category: "Learning",
                image: "/src/assets/background1.jpg",
                lessons: 9,
                students: 3,
                reviews: 0,
                price: "$39.99",
                rating: 4.3,
            },
            {
                title: "A Gateway to Lifelong Learning",
                category: "Business Office",
                image: "/src/assets/background1.jpg",
                lessons: 16,
                students: 2,
                reviews: 0,
                price: "$45.99",
                rating: 4.7,
            },
            {
                title: "The Digital Learning Experience",
                category: "Business Office",
                image: "/src/assets/background1.jpg",
                lessons: 9,
                students: 5,
                reviews: 0,
                price: "$49.99",
                rating: 4.5,
            },
            {
                title: "The Rise of Online Education Education",
                category: "Learning",
                image: "/src/assets/background1.jpg",
                lessons: 14,
                students: 1,
                reviews: 1,
                price: "$59.99",
                rating: 4.0,
            },
            {
                title: "The Evolution of Modern Education",
                category: "Learning",
                image: "/src/assets/background1.jpg",
                lessons: 9,
                students: 3,
                reviews: 0,
                price: "$39.99",
                rating: 4.3,
            },
            {
                title: "A Gateway to Lifelong Learning",
                category: "Business Office",
                image: "/src/assets/background1.jpg",
                lessons: 16,
                students: 2,
                reviews: 0,
                price: "$45.99",
                rating: 4.7,
            },
        ],
        "Web Design": [
            {
                title: "Responsive Web Design",
                category: "Web Design",
                image: "/src/assets/background1.jpg",
                lessons: 10,
                students: 12,
                reviews: 5,
                price: "$69.99",
                rating: 4.8,
            },
            {
                title: "Designing for Mobile",
                category: "Web Design",
                image: "/src/assets/background1.jpg",
                lessons: 8,
                students: 15,
                reviews: 3,
                price: "$59.99",
                rating: 4.2,
            },
            {
                title: "UI/UX Principles",
                category: "Web Design",
                image: "/src/assets/background1.jpg",
                lessons: 12,
                students: 9,
                reviews: 4,
                price: "$65.99",
                rating: 4.5,
            },
            {
                title: "Building Modern Websites",
                category: "Web Design",
                image: "/src/assets/background1.jpg",
                lessons: 11,
                students: 7,
                reviews: 2,
                price: "$54.99",
                rating: 4.0,
            },
        ],
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Popular Courses</h2>

            {/* Category Menu */}
            <div style={styles.categoryMenu}>
                {['All Courses', 'Web Design', 'Development', 'Sales Marketing', 'IT & Software'].map((category) => (
                    <button
                        key={category}
                        style={{
                            ...styles.categoryButton,
                            ...(selectedCategory === category ? styles.activeCategoryButton : {}),
                        }}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Courses Grid */}
            <div style={styles.coursesGrid}>
                {courses[selectedCategory]?.map((course, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.courseCard,
                            ':hover': styles.courseCardHover,
                        }}
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            style={styles.courseImage}
                        />
                        <div style={styles.courseInfo}>
                            <h3 style={styles.courseTitle}>{course.title}</h3>
                            <div style={styles.starRating}>
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src="/src/assets/star-full.png"
                                        alt={`Star ${i + 1}`}
                                        style={styles.star}
                                    />
                                ))}
                            </div>
                            <p style={styles.courseDetails}>
                                {course.lessons} Lessons | {course.students} Students | {course.reviews} Reviews
                            </p>
                            <p style={styles.coursePrice}>{course.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCoursesSection;
