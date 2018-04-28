import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LocalStorageBooksService} from "./local-storage-books.service";
import 'rxjs/Rx';

interface IResponseBooksData {
  items: Array<any>;
}

@Injectable()
  export class HttpBookService {
    constructor(
      private http: HttpClient,
      private localStorageBooksService: LocalStorageBooksService
    ) {}

    getBooks(value: string): Observable<any> {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${value}`;

      return this.http.get(url)
        .map((data: IResponseBooksData) => {
          for (const unit of data.items) {
            unit['isActiveButton'] = !!this.localStorageBooksService.getItem(unit.id);
          }
        return data;
        });
    }

}
