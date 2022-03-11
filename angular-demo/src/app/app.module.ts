import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { MysecondcomponentComponent } from './mysecondcomponent/mysecondcomponent.component';
import { Bootcomponent1Component } from './bootcomponent1/bootcomponent1.component';
import { Bootcomponent2Component } from './bootcomponent2/bootcomponent2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    MysecondcomponentComponent,
    Bootcomponent1Component,
    Bootcomponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
