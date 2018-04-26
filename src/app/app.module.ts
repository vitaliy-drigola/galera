import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SearchModule} from "./search/search.module";
import {FormsModule} from "@angular/forms";
import {HttpBookService} from "./search/http-book.service";
import {LocalStorageBooksService} from "./search/local-storage-books.service";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SearchModule,
    FormsModule
  ],
  providers: [
    HttpBookService,
    LocalStorageBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
