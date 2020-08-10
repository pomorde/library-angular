import { IAuthor } from './author';

export interface IBook {
  id: number;
  title: string;
  author: IAuthor;
  genre: string;
}
