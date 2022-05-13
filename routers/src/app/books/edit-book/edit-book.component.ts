import { Component, OnInit } from '@angular/core';

import { BooksService } from '../books.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book;

  constructor(private booksService: BooksService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params)=> {
      this.book = this.booksService.getBook(+params.get('id'));
    });
    // this.book = this.booksService.getBook(index);
  }

  set releaseDate(e: any) {
    e = e.split('-');
    const d = new Date(e[0], e[1] - 1, e[2]);
    this.book.releaseDate.setFullYear(d.getFullYear(), d.getMonth(), d.getDate());
  }

  get releaseDate(): any {
    return this.book.releaseDate.toISOString().substring(0, 10);
  }

  onUpdateBook(): void {
    this.booksService.updateBook(this.book);
  }

}
