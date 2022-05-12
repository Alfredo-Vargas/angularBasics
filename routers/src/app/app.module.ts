import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookComponent } from './books/book/book.component';
import { BooksService } from './books/books.service';
import { CreateBookComponent } from './books/create-book/create-book.component';
import { EuroPipe } from './euro.pipe';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    EditBookComponent,
    CreateBookComponent,
    BookComponent,
    EuroPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
