
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
