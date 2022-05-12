
export class Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  img: string;
  price: number;
  summary: string;
  releaseDate: Date;

  constructor() {
    this.id = 0;
    this.title = '';
    this.author = '';
    this.genre = '';
    this.img = '';
    this.price = 0;
    this.summary = '';
    this.releaseDate = new Date();
  }
}

