import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaArrowRight, FaUser, FaClock, FaBook, FaUsers, FaGlobe, FaCertificate, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "/src/assets/styles/CourseDetails.module.css";
import {courses} from "../utils/dataCourses.ts";

const CourseDetails = () => {
    const { id } = useParams<{ id: string }>(); // Получаем id из URL

    // Находим курс по id
    const course = courses.find((course) => course.id === Number(id));

    if (!course) {
        return <div>Course not found</div>; // Если курс не найден
    }

    const roundedRating = Math.round(course.rating);
    const [activeSection, setActiveSection] = useState("about");

    return (
        <div className={styles.pageWrapper}>
            {/* Верхняя темная секция */}
            <section className={styles.headerSection}>
                <div className={styles.headerContent}>
                    <div className={styles.rating}>
                        {[...Array(roundedRating)].map((_, index) => (
                            <FaStar key={index} className={styles.star} />
                        ))}
                        {/*<span>({course.reviewsText})</span>*/}
                    </div>
                    <h1 className={styles.title}>{course.title}</h1>
                    <p className={styles.meta}>
                        By <span>{course.instructor}</span>
                    </p>
                </div>
            </section>

            {/* Основной контент */}
            <div className={styles.mainContent}>
                <div className={styles.leftContent}>
                    {/* Навигация */}
                    <nav className={styles.navMenu}>
                        <button
                            className={activeSection === "about" ? styles.active : ""}
                            onClick={() => setActiveSection("about")}
                        >About</button>
                        <button
                            className={activeSection === "curriculum" ? styles.active : ""}
                            onClick={() => setActiveSection("curriculum")}
                        >Curriculum</button>
                        <button
                            className={activeSection === "teacher" ? styles.active : ""}
                            onClick={() => setActiveSection("teacher")}
                        >Teacher</button>
                        <button
                            className={activeSection === "reviews" ? styles.active : ""}
                            onClick={() => setActiveSection("reviews")}
                        >Reviews</button>
                    </nav>

                    {/* Отображение секций */}
                    <div className={styles.sectionContent}>
                        {activeSection === "about" && (
                            <div>
                                <h2>About This Course</h2>
                                <p>{course.description}</p>
                            </div>
                        )}
                        {activeSection === "curriculum" && (
                            <div>
                                <h2>Course Curriculum</h2>
                                <ul>
                                    {/*{course.curriculum.map((item, index) => (*/}
                                    {/*    <li key={index}>{item}</li>*/}
                                    {/*))}*/}
                                </ul>
                            </div>
                        )}
                        {activeSection === "teacher" && (
                            <div>
                                <h2>About the Teacher</h2>
                                <p>{course.teacherBio}</p>
                            </div>
                        )}
                        {activeSection === "reviews" && (
                            <div>
                                <h2>Student Reviews</h2>
                                <p>{course.reviewsText}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Правая карточка */}
                <aside className={styles.cardWrapper}>
                    <img src={course.image} alt={course.title} className={styles.courseImage} />
                    <div className={styles.priceSection}>
                        <div className={styles.priceContainer}>
                            <span className={styles.currentPrice}>{course.price}</span>
                            <span className={styles.oldPrice}>{course.oldPrice}</span>
                        </div>
                        <button className={styles.buyButton}>Buy Now <FaArrowRight /></button>
                    </div>
                    <div className={styles.courseDetails}>
                        <p><FaUser /> Instructor: {course.instructor}</p>
                        <p><FaClock /> Duration: {course.duration}</p>
                        <p><FaBook /> Lessons: {course.lessons}</p>
                        <p><FaUsers /> Students: {course.students}</p>
                        <p><FaGlobe /> Languages: {course.language}</p>
                        <p><FaCertificate /> Certifications: Yes</p>
                    </div>
                    <div className={styles.contactSection}>
                        <h4>Contact Us</h4>
                        <p>Phone: +777-789-09</p>
                        <p>Email: example@gmail.com</p>
                        <div className={styles.socialIcons}>
                            <FaFacebook />
                            <FaTwitter />
                            <FaLinkedin />
                            <FaInstagram />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CourseDetails;
