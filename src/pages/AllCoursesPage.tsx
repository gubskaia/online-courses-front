import React, { useState } from 'react';
import { categories } from '../utils/dataCategories';
import { courses } from '../utils/dataCourses';
import CourseCard from '../components/CourseCard';
import styles from '../assets/styles/AllCoursesPage.module.css';

const AllCoursesPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(1); // 1 — это "All Courses"
    const [minPrice, setMinPrice] = useState<number | ''>(''); // Минимальная цена
    const [maxPrice, setMaxPrice] = useState<number | ''>(''); // Максимальная цена
    const [minDuration, setMinDuration] = useState<number | ''>(''); // Минимальная продолжительность
    const [maxDuration, setMaxDuration] = useState<number | ''>(''); // Максимальная продолжительность
    const [minRating, setMinRating] = useState<number>(0); // Минимальный рейтинг

    // Фильтрация курсов
    const filteredCourses = courses.filter((course) => {
        // Фильтрация по категории
        const matchesCategory = selectedCategory === 1 || course.categoryId === selectedCategory;

        // Фильтрация по цене
        const price = parseFloat(course.price.replace('$', ''));
        const matchesPrice =
            (minPrice === '' || price >= minPrice) && (maxPrice === '' || price <= maxPrice);

        // Фильтрация по продолжительности
        const duration = parseFloat(course.duration.replace('h', ''));
        const matchesDuration =
            (minDuration === '' || duration >= minDuration) &&
            (maxDuration === '' || duration <= maxDuration);

        // Фильтрация по рейтингу
        const matchesRating = course.rating >= minRating;

        return matchesCategory && matchesPrice && matchesDuration && matchesRating;
    });

    return (
        <div className={styles.pageContainer}>
            <div className={styles.filtersContainer}>
                <h2>Filters</h2>

                {/* Фильтр по категории */}
                <div className={styles.filterGroup}>
                    <h3>Category</h3>
                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category.id}
                                className={selectedCategory === category.id ? styles.activeFilter : ''}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Фильтр по цене */}
                <div className={styles.filterGroup}>
                    <h3>Price Range</h3>
                    <div className={styles.priceInputs}>
                        <input
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Фильтр по продолжительности */}
                <div className={styles.filterGroup}>
                    <h3>Course Duration (hours)</h3>
                    <div className={styles.priceInputs}>
                        <input
                            type="number"
                            placeholder="Min"
                            value={minDuration}
                            onChange={(e) => setMinDuration(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxDuration}
                            onChange={(e) => setMaxDuration(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Фильтр по рейтингу */}
                <div className={styles.filterGroup}>
                    <h3>Minimum Rating</h3>
                    <input
                        type="number"
                        placeholder="0 - 5"
                        value={minRating}
                        min="0"
                        max="5"
                        step="0.1"
                        onChange={(e) => setMinRating(parseFloat(e.target.value) || 0)}
                    />
                </div>
            </div>

            <div className={styles.coursesContainer}>
                <h2>All Courses</h2>
                <div className={styles.courseGrid}>
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))
                    ) : (
                        <p>No courses found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllCoursesPage;
