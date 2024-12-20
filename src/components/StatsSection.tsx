import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "/src/assets/styles/StatsSection.module.css";

const StatsSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const stats = [
        { value: 20000, label: "Active Students" },
        { value: 89, label: "Faculty Courses" },
        { value: 230, label: "Best Professors" },
        { value: 25, label: "Award Achieved" },
    ];

    const AnimatedNumber = ({ value }: { value: number }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (isVisible) {
                let start = 0;
                const duration = 2000; // 2 seconds
                const increment = Math.ceil(value / (duration / 50)); // 50 FPS

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= value) {
                        clearInterval(timer);
                        start = value;
                    }
                    setCount(start);
                }, 50);

                return () => clearInterval(timer);
            }
        }, [isVisible, value]);

        return <motion.div className={styles.number}>{count.toLocaleString()}</motion.div>;
    };

    return (
        <div className={styles.container} ref={containerRef}>
            {stats.map((stat, index) => (
                <React.Fragment key={index}>
                    <div className={styles.statBlock}>
                        <AnimatedNumber value={stat.value} />
                        <div className={styles.label}>{stat.label}</div>
                    </div>
                    {index < stats.length - 1 && <div className={styles.divider}></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default StatsSection;
