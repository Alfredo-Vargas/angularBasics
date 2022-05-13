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
  nextId: number = 0;

  // added route
  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.book = this.booksService.getBook(1);
/*
    // USING SNAPSHOTS
    const bookId = this.route.snapshot.params.id;
    this.book = this.booksService.getBook(+bookId);
*/

    // USING OBSERVABLES
    this.route.paramMap.subscribe((params: Params)=> {
      this.book = this.booksService.getBook(+params.get('id'));
    });

  }

  getsrc(book: Book): string {
    return '../../../assets/' + book.img;
  }

  onNextBook(): void {

    this.nextId = +this.book.id == this.booksService.getBooks().length ? 1 : +this.book.id + 1;
    // the commented line below does not sync with string interpolation
    // this.book = this.booksService.getBook(this.nextId);
    this.router.navigate(['books', this.nextId]);
  }

  onEditBook(): void {
    this.router.navigate(['edit'], {relativeTo: this.route} );
  }
}

