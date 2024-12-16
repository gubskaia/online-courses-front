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
    categoryId: number; // Связь с категорией
}