import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from '../book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  onCreateBook(): void {
    console.log("created action registed in books component");
    this.router.navigate(['create'], {relativeTo: this.route} );
    console.log(this.route);
    // this.router.navigate(['/books/create']);
    // this.router.navigate(['books', 'create']);
  }
}
