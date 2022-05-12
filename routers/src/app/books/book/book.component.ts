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

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.book = this.booksService.getBook(1);
  }

  getsrc(book: Book): string {
    return '../../assets/' + book.img;
  }

}
