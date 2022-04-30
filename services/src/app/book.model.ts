export class Book {
  title: String;
  author: String;
  genre: String;
  img: string;
  price: Number;
  summary: String;
  releaseDate: Date;

  constructor() {
    this.title = '';
    this.author = '';
    this.genre = '';
    this.img = '';
    this.price = 0;
    this.summary = '';
    this.releaseDate = new Date();
  }
}
