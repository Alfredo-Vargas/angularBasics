import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { Assignment4Component } from './assignment4/assignment4.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    DisplayUserComponent,
    Assignment4Component
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
