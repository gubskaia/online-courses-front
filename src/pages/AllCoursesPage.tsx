import React, { useState } from "react";

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        padding: "4% 6%",
        background: "#f9f9f9",
        fontFamily: '"Poppins", sans-serif',
        minHeight: "100vh",
        gap: "2rem",
    },
    filtersSidebar: {
        width: "25%",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    mainContent: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: "2.5rem",
        fontWeight: 700,
        color: "#003366",
        textAlign: "center",
        marginBottom: "2rem",
    },
    categoryMenu: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "2rem",
    },
    categoryButton: {
        padding: "10px 20px",
        fontSize: "1rem",
        fontWeight: 600,
        borderRadius: "20px",
        border: "2px solid #007ac1",
        backgroundColor: "transparent",
        color: "#007ac1",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
    activeCategoryButton: {
        backgroundColor: "#007ac1",
        color: "white",
    },
    coursesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1.5rem",
    },
    courseCard: {
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        position: "relative",
    },
    courseCardHover: {
        transform: "scale(1.05)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
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
        fontWeight: 600,
        color: "#004d91",
        marginBottom: "0.5rem",
    },
    courseDetails: {
        fontSize: "0.9rem",
        color: "#777",
        marginBottom: "0.5rem",
    },
    coursePrice: {
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "#007ac1",
        marginBottom: "0.5rem",
    },
    discountPrice: {
        textDecoration: "line-through",
        color: "#999",
        marginLeft: "10px",
    },
    enrollButton: {
        padding: "10px 15px",
        backgroundColor: "#007ac1",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        textAlign: "center",
        fontWeight: 600,
        marginTop: "0.5rem",
    },
    filterTitle: {
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "#003366",
        marginBottom: "1rem",
    },
    filterControl: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    filterLabel: {
        fontSize: "1rem",
        fontWeight: 600,
        color: "#555",
    },
    filterInput: {
        padding: "0.5rem",
        fontSize: "1rem",
        border: "1px solid #ddd",
        borderRadius: "5px",
    },
    filterCheckbox: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
};

const AllCoursesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Courses");
    const [filters, setFilters] = useState({
        type: "",
        employment: false,
        level: "",
        duration: "",
        price: "",
    });

    const courses = {
        "All Courses": [
            {
                title: "Python Developer",
                lessons: 10,
                students: 800,
                price: 78000,
                discountedPrice: 6513,
                duration: "10 months",
                image: "https://via.placeholder.com/280x150",
            },
            {
                title: "Interior Designer",
                lessons: 12,
                students: 500,
                price: 104463,
                discountedPrice: 8706,
                duration: "12 months",
                image: "https://via.placeholder.com/280x150",
            },
        ],
    };

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters({
            ...filters,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const filteredCourses = courses[selectedCategory]?.filter((course) => {
        if (filters.duration && !course.duration.includes(filters.duration)) {
            return false;
        }
        if (filters.price && course.discountedPrice > Number(filters.price)) {
            return false;
        }
        return true;
    });

    return (
        <div style={styles.container}>
            <aside style={styles.filtersSidebar}>
                <h3 style={styles.filterTitle}>Filters</h3>

                <div style={styles.filterControl}>
                    <label style={styles.filterLabel}>Type of Course:</label>
                    <div style={styles.filterCheckbox}>
                        <input
                            type="radio"
                            id="any"
                            name="type"
                            value=""
                            checked={filters.type === ""}
                            onChange={handleFilterChange}
                        />
                        <label htmlFor="any">Any</label>
                    </div>
                    <div style={styles.filterCheckbox}>
                        <input
                            type="radio"
                            id="profession"
                            name="type"
                            value="Profession"
                            checked={filters.type === "Profession"}
                            onChange={handleFilterChange}
                        />
                        <label htmlFor="profession">Profession</label>
                    </div>
                    <div style={styles.filterCheckbox}>
                        <input
                            type="radio"
                            id="course"
                            name="type"
                            value="Course"
                            checked={filters.type === "Course"}
                            onChange={handleFilterChange}
                        />
                        <label htmlFor="course">Course</label>
                    </div>
                </div>

                <div style={styles.filterControl}>
                    <label style={styles.filterLabel}>With Employment:</label>
                    <input
                        type="checkbox"
                        name="employment"
                        checked={filters.employment}
                        onChange={handleFilterChange}
                    />
                </div>

                <div style={styles.filterControl}>
                    <label style={styles.filterLabel}>Level:</label>
                    <select
                        name="level"
                        value={filters.level}
                        onChange={handleFilterChange}
                        style={styles.filterInput}
                    >
                        <option value="">Any</option>
                        <option value="Beginner">For Beginners</option>
                        <option value="Expert">For Experts</option>
                    </select>
                </div>

                <div style={styles.filterControl}>
                    <label style={styles.filterLabel}>Duration (months):</label>
                    <input
                        type="text"
                        name="duration"
                        value={filters.duration}
                        onChange={handleFilterChange}
                        placeholder="e.g., 10"
                        style={styles.filterInput}
                    />
                </div>

                <div style={styles.filterControl}>
                    <label style={styles.filterLabel}>Max Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                        placeholder="e.g., 10000"
                        style={styles.filterInput}
                    />
                </div>
            </aside>

            <main style={styles.mainContent}>
                <h2 style={styles.sectionTitle}>Course Catalog</h2>

                <div style={styles.categoryMenu}>
                    {Object.keys(courses).map((category) => (
                        <button
                            key={category}
                            style={{
                                ...styles.categoryButton,
                                ...(selectedCategory === category
                                    ? styles.activeCategoryButton
                                    : {}),
                            }}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div style={styles.coursesGrid}>
                    {filteredCourses?.map((course, index) => (
                        <div
                            key={index}
                            style={styles.courseCard}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = styles.courseCardHover.transform;
                                e.currentTarget.style.boxShadow = styles.courseCardHover.boxShadow;
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "";
                                e.currentTarget.style.boxShadow = "";
                            }}
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                style={styles.courseImage}
                            />
                            <div style={styles.courseInfo}>
                                <h3 style={styles.courseTitle}>{course.title}</h3>
                                <p style={styles.courseDetails}>{course.duration} | {course.students} Students</p>
                                <p style={styles.coursePrice}>
                                    {course.discountedPrice} сом/мес
                                    <span style={styles.discountPrice}>{course.price} сом</span>
                                </p>
                                <button style={styles.enrollButton}>Enroll</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AllCoursesPage;
