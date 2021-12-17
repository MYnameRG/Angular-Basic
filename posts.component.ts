import { Observable } from 'rxjs';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostsService) {}

  addPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.service.postPosts(post)
      .subscribe(response => {
         post.id = JSON.parse(JSON.stringify(response)).id;
      }, (error: Response) => {
        if(error.status == 400) {}
        else {
          alert('unexpected errors');
          console.log(error);
        }
      });
      this.posts.splice(0, 0, post);
  }

  updatePost(post: any) {
    this.service.updatePosts(post.id)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert('unexpected errors');
        console.log(error);
      });
  }

  deletePost(post: any) {
    this.service.deletePosts(345)
      .subscribe({
       next: (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      error: (error: AppError) => {
        // if(error instanceof NotFoundError) alert("Post has been already deleted")
        // else {
          alert('unexpected errors');
          console.log(error);
        // }
      }
    });
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      }, error => {
        alert('unexpected errors');
        console.log(error);
      })
  }

}
