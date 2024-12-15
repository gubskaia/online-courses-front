import React, {useState, useRef} from "react";
import {courses} from "../utils/dataCourses";
import {categories} from "../utils/dataCategories";
import {FaStar, FaArrowLeft, FaArrowRight, FaClock, FaUser} from "react-icons/fa";

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
        backgroundColor: "#0b0c10",
        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(138, 43, 226, 0.3), transparent 60%), radial-gradient(circle at 80% 50%, rgba(138, 43, 226, 0.3), transparent 60%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "700px 700px, 700px 700px",
        backgroundPosition: "left center, right center",
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
    categoryMenu: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: "2rem",
        padding: "0.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        gap: "1rem",
        margin: "-4rem auto 2rem auto",
        maxWidth: "80%",
    },
    categoryButton: {
        flex: 1,
        textAlign: "center",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        fontWeight: "600",
        borderRadius: "1rem",
        backgroundColor: "#ffffff",
        color: "#000",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
    activeCategoryButton: {
        backgroundColor: "#2b0c3b",
        color: "#ffffff",
    },
    courseCarouselWrapper: {
        display: "flex",
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
    },
    courseGrid: {
        display: "flex",
        gap: "1.5rem",
        transition: "transform 0.3s ease-in-out",
        paddingBottom: "2rem",
    },
    courseCard: {
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "340px",
        position: "relative",
        textAlign: "left",
        transition: "transform 0.2s ease-in-out",
        marginBottom: "2rem",
    },
    image: {
        width: "100%",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        height: "180px",
        objectFit: "cover",
    },
    courseTitle: {
        fontSize: "1.2rem",
        fontWeight: "600",
        marginBottom: "0.5rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    description: {
        fontSize: "0.9rem",
        color: "#555",
        marginBottom: "0.5rem",
        height: "40px",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    ratingContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.1rem",
        marginBottom: "0.5rem",
    },
    starIcon: {
        fontSize: "0.8rem",
    },
    ratingNumber: {
        fontSize: "1rem",
        color: "#ffd700",
        fontWeight: "600",
    },
    courseInfo: {
        marginTop: "0.8rem",
    },
    courseDetailsRow: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "0.8rem",
    },
    detailBox: {
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        backgroundColor: "#f5f5f5",
        padding: "0.4rem 0.8rem",
        borderRadius: "20px",
        fontSize: "0.8rem",
        color: "#300449",
        fontWeight: "500",
    },
    icon: {
        fontSize: "1rem",
    },
    coursePriceContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
    },
    coursePrice: {
        fontSize: "1.1rem",
        fontWeight: "600",
        color: "#8100c0",
    },
    oldPrice: {
        textDecoration: "line-through",
        color: "#999",
        fontSize: "1rem",
        marginLeft: "-4rem",
    },
    arrowButton: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        color: "rgba(56,0,75,0.89)",
        border: "none",
        fontSize: "1.5rem",
        padding: "0.5rem",
        cursor: "pointer",
        zIndex: "10",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    leftArrow: {
        left: "10px",
    },
    rightArrow: {
        right: "10px",
    },
    footerText: {
        fontSize: "1rem",
        color: "#000",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        // fontWeight: "bold",
    },
    exploreText: {
        color: "#8100c0", // Цвет текста стрелки
        display: "inline-flex",
        alignItems: "center",
        fontWeight: "bold",
    },
};

const BestsellerCourses: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const courseGridRef = useRef<HTMLDivElement>(null);

    const filteredCourses = selectedCategory === 1
        ? courses
        : courses.filter((course) => course.category === selectedCategory);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCourses.length - 3));
        if (courseGridRef.current) {
            courseGridRef.current.scrollLeft -= 320;
        }
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < filteredCourses.length - 3 ? prev + 1 : 0));
        if (courseGridRef.current) {
            courseGridRef.current.scrollLeft += 320;
        }
    };

    // Render stars based on rating
    const renderStars = (rating: number) => {
        const totalStars = 5;
        const filledStars = Math.round(rating);
        return (
            <div style={styles.ratingContainer}>
                {Array.from({length: totalStars}, (_, index) => (
                    <FaStar
                        key={index}
                        color={index < filledStars ? "#ffd700" : "#ddd"}
                        style={styles.starIcon}
                    />
                ))}
                <span style={styles.ratingNumber}>({rating.toFixed(1)})</span>
            </div>
        );
    };

    return (
        <section style={styles.bestsellerSection}>
            {/* Background Overlay */}
            <div style={styles.backgroundOverlay}></div>

            {/* Header */}
            <div style={styles.contentWrapper}>
                <header style={styles.header}>
                    <h1 style={styles.title}>Bestseller Courses</h1>
                </header>

                {/* Category Menu */}
                <div style={styles.categoryMenu}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            style={{
                                ...styles.categoryButton,
                                ...(selectedCategory === category.id ? styles.activeCategoryButton : {}),
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Course Carousel */}
                <div style={styles.courseCarouselWrapper}>
                    <button
                        style={{...styles.arrowButton, ...styles.leftArrow}}
                        onClick={handlePrev}
                    >
                        <FaArrowLeft/>
                    </button>

                    <div
                        ref={courseGridRef}
                        style={styles.courseGrid}
                    >
                        {filteredCourses.slice(currentIndex, currentIndex + 3).map((course) => (
                            <div key={course.id} style={styles.courseCard}>
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    style={styles.image}
                                />
                                <h3 style={styles.courseTitle}>{course.title}</h3>
                                <p style={styles.description}>{course.description}</p>
                                {renderStars(course.rating)}
                                <div style={styles.courseInfo}>
                                    <div style={styles.courseDetailsRow}>
                                        <div style={styles.detailBox}>
                                            <FaUser style={styles.icon}/> {course.students} students
                                        </div>
                                        <div style={styles.detailBox}>
                                            <FaClock style={styles.icon}/> {course.duration}
                                        </div>
                                    </div>
                                    <div style={styles.coursePriceContainer}>
                                        <span style={styles.coursePrice}>{course.price}</span>
                                        {course.oldPrice && (
                                            <span style={styles.oldPrice}>{course.oldPrice}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        style={{...styles.arrowButton, ...styles.rightArrow}}
                        onClick={handleNext}
                    >
                        <FaArrowRight/>
                    </button>
                </div>

                {/* Footer */}
                <p style={styles.footerText}>
                    Explore more courses.
                    <span style={styles.exploreText}>
                        View All
                        <FaArrowRight/>
                     </span>
                </p>
            </div>
        </section>
    );
};

export default BestsellerCourses;