import { Book } from '../../book/models/book';

export interface CartBook extends Book {
  count: number;
}
