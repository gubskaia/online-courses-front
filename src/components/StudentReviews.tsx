import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "/src/assets/styles/StudentReviews.module.css";
import { reviews } from "/src/utils/reviewsData";

const StudentReviews: React.FC = () => {

    const handleArrowClick = (direction: "left" | "right") => {
        console.log(`Arrow clicked: ${direction}`);
    };

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Students Say About KnowHub</h2>
                <p className={styles.subtitle}>What our learners think about our courses?</p>
            </div>
            <div className={styles.reviewsWrapper}>
                <button
                    className={`${styles.arrowButton} ${styles.leftArrow}`}
                    onClick={() => handleArrowClick("left")}
                >
                    <FaArrowLeft />
                </button>
                {reviews.map((review) => (
                    <div key={review.id} className={styles.reviewCard}>
                        <div className={styles.quoteIcon}>“</div>
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className={styles.avatar}
                        />
                        <h3 className={styles.name}>{review.name}</h3>
                        <p className={styles.role}>{review.role}</p>
                        <p className={styles.text}>{review.text}</p>
                        <div className={styles.rating}>
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
                    className={`${styles.arrowButton} ${styles.rightArrow}`}
                    onClick={() => handleArrowClick("right")}
                >
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default StudentReviews;
