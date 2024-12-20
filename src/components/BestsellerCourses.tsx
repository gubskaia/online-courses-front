import React, { useState, useRef } from "react";
import { courses } from "../utils/dataCourses"; // Данные курсов
import { categories } from "../utils/dataCategories"; // Категории
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CourseCard from "./CourseCard.tsx";
import styles from "/src/assets/styles/BestsellerCourses.module.css";

const BestsellerCourses: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const courseGridRef = useRef<HTMLDivElement>(null);

    // Фильтрация курсов по выбранной категории
    const filteredCourses =
        selectedCategory === 1
            ? courses // Если выбрана категория "All"
            : courses.filter((course) => course.categoryId === selectedCategory);

    // Смена категории
    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategory(categoryId); // Обновляем выбранную категорию
        setCurrentIndex(0); // Сбрасываем текущий индекс для показа с начала
        if (courseGridRef.current) {
            courseGridRef.current.scrollLeft = 0; // Сброс прокрутки
        }
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev > 0 ? prev - 1 : Math.max(filteredCourses.length - 3, 0)
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
            <div className={styles.backgroundOverlay}></div>

            <div className={styles.contentWrapper}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Bestseller Courses</h1>
                </header>

                {/* Панель с категориями */}
                <div className={styles.categoryMenu}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
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

                {/* Карусель курсов */}
                <div className={styles.courseCarouselWrapper}>
                    <button
                        className={`${styles.arrowButton} ${styles.leftArrow}`}
                        onClick={handlePrev}
                        disabled={filteredCourses.length <= 3}
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
                        disabled={filteredCourses.length <= 3}
                    >
                        <FaArrowRight />
                    </button>
                </div>

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
