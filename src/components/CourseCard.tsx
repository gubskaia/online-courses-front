import React from "react";
import { FaStar, FaClock, FaUser } from "react-icons/fa";
import styles from "/src/assets/styles/CourseCard.module.css";

interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    students: number;
    duration: string;
    price: string;
    oldPrice?: string;
}

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const renderStars = (rating: number) => {
        const totalStars = 5;
        const filledStars = Math.round(rating);
        return (
            <div className={styles.stars}>
                {Array.from({ length: totalStars }, (_, index) => (
                    <FaStar
                        key={index}
                        color={index < filledStars ? "#ffd700" : "#ddd"}
                        className={styles.starIcon}
                    />
                ))}
                <span className={styles.starText}>({rating.toFixed(1)})</span>
            </div>
        );
    };

    return (
        <div className={styles.card}>
            <img src={course.image} alt={course.title} className={styles.image} />
            {renderStars(course.rating)}
            <h3 className={styles.title}>{course.title}</h3>
            <p className={styles.description}>{course.description}</p>
            <div className={styles.infoRow}>
                <div className={styles.infoItem}>
                    <FaUser />
                    <span>{course.students} students</span>
                </div>
                <div className={styles.infoItem}>
                    <FaClock />
                    <span>{course.duration}</span>
                </div>
            </div>
            <div className={styles.priceRow}>
                <span className={styles.price}>{course.price}</span>
                {course.oldPrice && <span className={styles.oldPrice}>{course.oldPrice}</span>}
            </div>
        </div>
    );
};

export default CourseCard;
