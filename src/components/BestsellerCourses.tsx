import React, { useState, useRef } from "react";
import { courses } from "../utils/dataCourses";
import { categories } from "../utils/dataCategories";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CourseCard from "./CourseCard.tsx";
import styles from "/src/assets/styles/BestsellerCourses.module.css";

const BestsellerCourses: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const courseGridRef = useRef<HTMLDivElement>(null);

    const filteredCourses =
        selectedCategory === 1
            ? courses
            : courses.filter((course) => course.category === selectedCategory);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCourses.length - 3
        );
        if (courseGridRef.current) {
            courseGridRef.current.scrollLeft -= 320;
        }
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev < filteredCourses.length - 3 ? prev + 1 : 0
        );
        if (courseGridRef.current) {
            courseGridRef.current.scrollLeft += 320;
        }
    };

    return (
        <section className={styles.bestsellerSection}>
            {/* Background Overlay */}
            <div className={styles.backgroundOverlay}></div>

            {/* Header */}
            <div className={styles.contentWrapper}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Bestseller Courses</h1>
                </header>

                {/* Category Menu */}
                <div className={styles.categoryMenu}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`${styles.categoryButton} ${
                                selectedCategory === category.id
                                    ? styles.activeCategoryButton
                                    : ""
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Course Carousel */}
                <div className={styles.courseCarouselWrapper}>
                    <button
                        className={`${styles.arrowButton} ${styles.leftArrow}`}
                        onClick={handlePrev}
                    >
                        <FaArrowLeft />
                    </button>

                    <div ref={courseGridRef} className={styles.courseGrid}>
                        {filteredCourses
                            .slice(currentIndex, currentIndex + 3)
                            .map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                    </div>

                    <button
                        className={`${styles.arrowButton} ${styles.rightArrow}`}
                        onClick={handleNext}
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/* Footer */}
                <p className={styles.footerText}>
                    Explore more courses.
                    <span className={styles.exploreText}>
                        View All
                        <FaArrowRight />
                    </span>
                </p>
            </div>
        </section>
    );
};

export default BestsellerCourses;
