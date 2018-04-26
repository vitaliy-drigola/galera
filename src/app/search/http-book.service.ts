import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
  export class HttpBookService {
    constructor(
      private http: HttpClient
    ) {}

    getBooks(value: string): Observable<any> {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${value}`;

      return this.http.get(url);
    }

}
