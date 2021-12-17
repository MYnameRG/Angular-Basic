import { NotFoundError } from './../common/not-found-error';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  postPosts(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  deletePosts(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((error: Response) => {
        // This will generate apllication specific error, we create class
        // if(error.status === 404) return throwError(() => new NotFoundError());
        return throwError(() => new NotFoundError());
      })
    );
  }

  updatePosts(id: number) {
    return this.http.put(`${this.url}/${id}`, JSON.stringify({ isRead: true}));
  }
}
