import { Component, OnInit } from '@angular/core';
import { AuthorListService } from './author-list.service';

@Component({
  selector: 'app-authors-h',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: string[];

  constructor(authorService: AuthorListService) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit(): void {
  }
}
