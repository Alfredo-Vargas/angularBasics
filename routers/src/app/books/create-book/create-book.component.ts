import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book.model';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.book = new Book();
  }

  set releaseDate(e: any) {
    e = e.split('-');
    const d = new Date(e[0], e[1] - 1, e[2]);
    this.book.releaseDate.setFullYear(d.getFullYear(), d.getMonth(), d.getDate());
  }

  get releaseDate(): any {
    return this.book.releaseDate.toISOString().substring(0, 10);
  }

  onClick(): void {
    console.log('creating book: ', this.book);
    this.bookService.addBook(this.book);
    this.book = {
      id: 0,
      title: '',
      author: '',
      genre: '',
      img: '',
      price: 0,
      summary: '',
      releaseDate: new Date()
    };
  }

}
