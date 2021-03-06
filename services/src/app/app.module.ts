import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateTitleComponent } from './update-title/update-title.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { LocationComponent } from './location/location.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateTitleComponent,
    CreateUserComponent,
    DisplayUsersComponent,
    LocationComponent,
    CreateBookComponent,
    DisplayBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
