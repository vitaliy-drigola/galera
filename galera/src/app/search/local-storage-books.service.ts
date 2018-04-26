import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageBooksService {

  private localStorage = localStorage;

  constructor() {}

  setItem(key: string, value) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {

    return JSON.parse(this.localStorage.getItem(key));
  }

  deleteItem(key: string) {
    this.localStorage.removeItem(key);

    return true;
  }

}
