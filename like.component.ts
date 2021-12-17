import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isActive: boolean = false;
  @Input() likesCount: number = 0;

  // @Outp
  onClick() {
    if(this.isActive) {
      this.likesCount--;
      this.isActive = false;
    }
    else {
      this.likesCount++;
      this.isActive = true;
    }
  }
}
