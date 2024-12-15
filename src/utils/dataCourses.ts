
import { Course } from '../types/Course';

// Курсы
export const courses: Course[] = [
    {
        id: 1,
        title: 'Mastering React Basics',
        description: 'A comprehensive guide to mastering React.',
        image: '/src/assets/background5.jpg',
        rating: 4.8,
        students: 120,
        duration: '12h',
        price: '$99.00',
        oldPrice: '$120.00',
        categoryId: 3, // Development
    },
    {
        id: 2,
        title: 'Advanced Java',
        description: 'Learn advanced concepts in Java.Learn advanced concepts in Java. Learn advanced concepts in Java. ',
        image: '/src/assets/background5.jpg',
        rating: 4.7,
        students: 95,
        duration: '8h',
        price: '$85.00',
        oldPrice: '$100.00',
        categoryId: 3, // Development
    },
    {
        id: 3,
        title: 'UI/UX Design Fundamentals',
        description: 'Master the principles of UI/UX design.',
        image: '/src/assets/background5.jpg',
        rating: 4.9,
        students: 130,
        duration: '10h',
        price: '$75.00',
        oldPrice: '$90.00',
        categoryId: 2, // Web Design
    },
    {
        id: 4,
        title: 'Python for Beginners',
        description: 'Begin your Python journey with this beginner course.',
        image: '/src/assets/background5.jpg',
        rating: 4.6,
        students: 150,
        duration: '15h',
        price: '$120.00',
        oldPrice: '$140.00',
        categoryId: 3, // Development
    },
    {
        id: 5,
        title: 'Web Development Bootcamp',
        description: 'Build real-world projects in this comprehensive bootcamp.',
        image: '/src/assets/background5.jpg',
        rating: 4.8,
        students: 180,
        duration: '20h',
        price: '$200.00',
        oldPrice: '$250.00',
        categoryId: 3, // Development
    },
];
