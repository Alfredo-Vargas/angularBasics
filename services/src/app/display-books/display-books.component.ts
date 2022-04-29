import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  books: Array<Book>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
