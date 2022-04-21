import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClicksComponent } from './clicks/clicks.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { SmarttitlecasePipe } from './smarttitlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClicksComponent,
    Assignment2Component,
    SmarttitlecasePipe
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
