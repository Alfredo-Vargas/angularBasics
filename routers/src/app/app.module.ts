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
// Added below manually
import { RouterModule, Routes } from '@angular/router';

// Added Routes
// Observation:
// (1) Static routes have no semicolon
// (2) Dynamic routes have semicolon and therefore are also dynamic (the Server Component can request the dynamic parameter)
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'books', component:BooksComponent, children: [
    {path: 'create', component:CreateBookComponent},
    {path: ':id', component:BookComponent},
    {path: ':id/edit', component:EditBookComponent}
  ]}
];

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
    FormsModule,
    RouterModule.forRoot(routes)  // Added here manually
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
