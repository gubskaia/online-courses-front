import React from "react";
import styles from "/src/assets/styles/PromoSection.module.css"; // Импортируем файл стилей

const PromoSection: React.FC = () => {
    return (
        <section className={styles.section}>
            {/* Left Side */}
            <div className={styles.leftSide}>
                <h3 className={styles.heading3}>🎓 10,000+ Unique Courses</h3>
                <h2 className={styles.heading2}>Let’s Find The Right Course For You!</h2>
                <p className={styles.paragraph}>
                    Achieve your learning goals. With our expert tutors, your goals are
                    closer than ever!
                </p>
                <button className={styles.button}>Start Learning ➞</button>
            </div>

            {/* Right Side */}
            <div className={styles.rightSide}>
                {/* Image */}
                <img
                    src="/src/assets/img/students-main.png" // Update with your image path
                    alt="Promo Courses"
                    className={styles.image}
                />

                {/* Discount Badge */}
                <div className={styles.discountBadge}>BIG SALE! 30% OFF</div>
            </div>
        </section>
    );
};

export default PromoSection;
