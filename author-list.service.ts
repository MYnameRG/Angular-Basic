import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorListService {

  getAuthors() {
    return ["author1", "author2", "author3"];
  }
}
