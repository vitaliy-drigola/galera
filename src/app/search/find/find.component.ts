import { Component, OnInit } from '@angular/core';
import {HttpBookService} from "../http-book.service";
import { LocalStorageBooksService } from "../local-storage-books.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  listBooks = [];
  listLocalBooks =[];

  constructor(
    private httpBooksService: HttpBookService,
    private localStorageBookService: LocalStorageBooksService

  ) { }

  ngOnInit() {
  }

  findBooks(value) {
    this.httpBooksService.getBooks(value).subscribe((data) => {
      this.listBooks = data.items;
    });
  }

  showBooks() {
    const keys = Object.keys(localStorage);
    const localStorageItems = [];

    for (const unit of keys) {
      localStorageItems.push(this.localStorageBookService.getItem(unit));
    }

    this.listLocalBooks = localStorageItems;
    //return localStorageItems;

  }


  addBook(book) {
    if (this.localStorageBookService.getItem(book.id) === null) {
      this.localStorageBookService.setItem(book.id, book);
    } else {
      return;
    }
  }

  deleteBook(id: string): void {
    const resultDelete = this.localStorageBookService.deleteItem(id);

    if (resultDelete) {
      this.showBooks();
    }
  }

}
