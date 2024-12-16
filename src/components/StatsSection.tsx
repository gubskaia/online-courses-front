import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const styles = {
    container: {
        backgroundColor: '#0b0c10', // Очень тёмный фон
        backgroundImage: `
        radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.3), transparent 60%),
        radial-gradient(circle at 80% 50%, rgba(138, 43, 226, 0.3), transparent 60%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '600px 600px, 600px 600px', // Размеры фиолетовых вспышек
        backgroundPosition: 'left center, right center', // Позиции вспышек
        color: 'white',
        padding: '50px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
    },
    statBlock: {
        textAlign: 'center',
        flex: 1,
    },
    number: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    label: {
        fontSize: '1rem',
        fontWeight: 500,
    },
    divider: {
        width: '1px',
        height: '60px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: '0 20px',
    },
};

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
        { value: 20000, label: 'Active Students' },
        { value: 89, label: 'Faculty Courses' },
        { value: 230, label: 'Best Professors' },
        { value: 25, label: 'Award Achieved' },
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

        return <motion.div style={styles.number}>{count.toLocaleString()}</motion.div>;
    };

    return (
        <div style={styles.container} ref={containerRef}>
            {stats.map((stat, index) => (
                <React.Fragment key={index}>
                    <div style={styles.statBlock}>
                        <AnimatedNumber value={stat.value} />
                        <div style={styles.label}>{stat.label}</div>
                    </div>
                    {index < stats.length - 1 && <div style={styles.divider}></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default StatsSection;
