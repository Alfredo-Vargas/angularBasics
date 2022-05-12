import { Component, OnInit } from '@angular/core';

import { BooksService } from '../books.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;

  // added route
  constructor(private booksService: BooksService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // added bookId and casting string to int using +bookId. Uses ('+' in front)
    const bookId = this.route.snapshot.params.id;
    if (bookId == null) {
      this.book = this.booksService.getBook(1);
    }
    else {
      this.book = this.booksService.getBook(+bookId);
    }
  }

  getsrc(book: Book): string {
    return '../../assets/' + book.img;
  }

  onNextBook(): void {
    let bookId = this.route.snapshot.params.id;
    let nextId: number;

    nextId = +bookId == this.booksService.getBooks().length ? 1 : +bookId + 1;
    this.book = this.booksService.getBook(nextId);
  }

}
