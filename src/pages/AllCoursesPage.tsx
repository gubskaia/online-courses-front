import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard'; // Импорт компонента
//import styles from '/src/assets/styles/AllCoursesPage.module.css'; // Подключение стилей страницы

const AllCoursesPage: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [courses, setCourses] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('All Courses');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://example.com/api/courses') // Замените на реальный URL API
            .then((response) => response.json())
            .then((data) => {
                setCourses(data);
                const uniqueCategories = ['All Courses', ...new Set(data.map((course: any) => course.category))];
                setCategories(uniqueCategories);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке курсов:', error);
                setLoading(false);
            });
    }, []);

    const filteredCourses = selectedCategory === 'All Courses'
        ? courses
        : courses.filter((course: any) => course.category === selectedCategory);

    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>All Courses</h2>

            {/* Category Menu */}
            <div className={styles.categoryMenu}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.categoryButton} ${selectedCategory === category ? styles.activeCategoryButton : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Loading State */}
            {loading && <p>Loading courses...</p>}

            {/* Courses Grid */}
            {!loading && filteredCourses.length === 0 && (
                <p>No courses found in this category.</p>
            )}

            <div className={styles.coursesGrid}>
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default AllCoursesPage;
