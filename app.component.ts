import { EventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .class {
      backgroundColor: red;
    }
  `]
})

export class AppComponent {
  _likes: number = 0;
  _select: boolean = false;
  _title = 'Hello World';
  _imageURL = 'https://picsum.photos/200/300';
  _colspan = 2;
  isActive = true;
  email="me@example.com"
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  post  = {
    title: 'Title',
    isFavorite: false
  }
  like = {
    isLiked: false,
    likesCount: 0
  };
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
  viewMode: string = 'map';

  constructor() {}

  count(): void {
    if(this._select) {
      this._likes--;
      this._select = false;
    }
    else {
      this._likes++;
      this._select = true;
    }
  }

  onSave($event: any) {
    // Here we stop the bubbling of the event
    $event.stopPropagation();
    console.log("Hello", $event);
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' })
  }

  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  // Traditional way
  // onKeyUp($event: any) {
  //   if($event.keyCode == 13) console.log("ENTER");
  // }

  // Smart way
  // onKeyUp() {
  //   console.log("ENTER");
  // }

  // onKeyUp(value: any) {
  //   console.log(value);
  // }

  onKeyUp() {
    console.log(this.email);
  }

  onFavoriteChanged(isSelected: EventArgs) {
    console.log("Favorite Changed: ", isSelected)
  }
}
