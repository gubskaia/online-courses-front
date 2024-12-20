import React from "react";
import styles from "/src/assets/styles/InfoSection.module.css";

const InfoSection: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Image section */}
            <div className={styles.imageSection}>
                <img
                    src="/src/assets/img/info3.png"
                    alt="Student Learning"
                    className={styles.image}
                />
            </div>

            {/* Text section */}
            <div className={styles.textSection}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerIcon}>
                        <img
                            src="/src/assets/img/logo.png"
                            alt="About Icon"
                            className={styles.headerIconImg}
                        />
                    </div>
                    <p className={styles.headerText}>About Company</p>
                </div>

                {/* Title */}
                <h2 className={styles.title}>
                    Next Step Toward Your <br />
                    <span className={styles.highlight}>
                        Personal & Professional Goals
                    </span>
                </h2>

                {/* Description */}
                <p className={styles.description}>
                    Unlock your potential with KnownHub, your trusted partner
                    for achieving professional aspirations through innovative
                    learning solutions.
                </p>

                {/* Features */}
                <div className={styles.featuresGrid}>
                    {[
                        "Online remote learning",
                        "Audio performance",
                        "Expert trainers",
                        "Lifetime access",
                        "Video performance",
                        "Courses guidelines",
                    ].map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                            <div className={styles.featureIconWrapper}>
                                <img
                                    src={`/src/assets/checked.png`}
                                    alt="Feature Icon"
                                    className={styles.featureIcon}
                                />
                            </div>
                            <p className={styles.featureText}>{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <a href="#top" className={styles.button}>
                    Explore Courses
                </a>
            </div>
        </div>
    );
};

export default InfoSection;
