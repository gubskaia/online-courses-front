export interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    students: number;
    duration: string;
    price: string;
    oldPrice?: string;
    instructor: string;
    lessons: number;
    categoryId: number;
    language: string;

}

