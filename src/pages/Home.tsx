import React from 'react';
import StatsSection from "../components/StatsSection.tsx";
import InfoSection from "../components/InfoSection.tsx";
import BestsellerCourses from "../components/BestsellerCourses.tsx";
import StudentReviews from "../components/StudentReviews.tsx";
import FAQSection from "../components/FAQSection.tsx";
import PromoSection from "../components/PromoSection.tsx";
import styles from "/src/assets/styles/Home.module.css";

const Home: React.FC = () => {
    return (
        <div>
            <div className={styles.container}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                    <h1 className={styles.title}>
                        Education & <br />
                        Online Courses
                    </h1>
                    <p className={styles.description}>
                        Unlock your potential with our innovative learning platform. Access top-tier courses and expert guidance to elevate your knowledge and skills.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button className={`${styles.button} ${styles.darkButton} ${styles.buttonHover}`}>
                            Explore Courses
                        </button>
                        <button className={`${styles.button} ${styles.transparentButton} ${styles.buttonHover}`}>
                            Contact Us
                            <span className={styles.arrow}>→</span>
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    <img
                        src="src/assets/planet-home.png"
                        alt="Students"
                        className={styles.image}
                    />
                </div>
            </div>
            <StatsSection />
            <InfoSection />
            <BestsellerCourses />
            <PromoSection />
            <StudentReviews />
            <FAQSection />
        </div>
    );
};

export default Home;
