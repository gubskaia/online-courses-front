export interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    students: number;
    duration: string;
    price: string;
    oldPrice?: string; // Опционально, если старой цены может не быть
    instructor: string;
    lessons: number;
    categoryId: number; // Связь с категорией
    language: string;

}

// export interface Course {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     rating: number;
//     students: number;
//     duration: string;
//     price: string;
//     oldPrice?: string; // Опционально, если старой цены может не быть
//     instructor: Instructor; // Ссылка на объект учителя
//     lessons: number;
//     categoryId: number; // Связь с категорией
//     curriculum: Curriculum[]; // Массив куррикулумов для курса
// }
//
// export interface Instructor {
//     id: number;
//     name: string;
//     bio: string;
//     photo: string; // Ссылка на фото учителя
//     contact: {
//         phone: string;
//         email: string;
//     };
//     socialLinks: {
//         facebook?: string;
//         twitter?: string;
//         linkedin?: string;
//         instagram?: string;
//     };
// }
//
//
// export interface Curriculum {
//     id: number;
//     courseId: number; // Ссылка на курс
//     title: string;
//     description: string;
//     duration: string; // Продолжительность каждого модуля/урока
//     materials: string[]; // Массив материалов, например, ссылки или файлы
//     objectives: string[]; // Цели или ключевые темы курса
// }
