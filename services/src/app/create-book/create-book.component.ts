import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  books: Array<Book>;
  newBook: Book = new Book();
  dirPrefix: string = '../assets/';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    // this.newBook = new Book();
  }

  onCreateBook(): void {
    let tempBook = new Book();
    tempBook = this.newBook;
    this.books.unshift(tempBook);
    console.log(tempBook.title);
    console.log(tempBook.author);
    console.log(tempBook.genre);
    tempBook.img = this.dirPrefix.concat(tempBook.img);
    console.log(tempBook.img);
    console.log(tempBook.releaseDate);
    console.log(tempBook.price);
    this.newBook = new Book();
  }

}
