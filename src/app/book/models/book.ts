import { BookCategories } from './categories';

export interface Book {
  id: number;
  name: string;
  description: string;
  price: number;
  category: BookCategories;
  createDate: number;
  isAvailable: boolean;
  image: string;
}

