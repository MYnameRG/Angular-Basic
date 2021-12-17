import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // 2nd approach (problem occurs)
  // inputs: ['isFavorite'] If it is not mention in class, then angular automatically makes isFavorite variable
})

export class FavouriteComponent implements OnInit {
  // isFavorite = true; This is the only variable not a property of its own
  // marked as input properties
  // For aliasing purposes, @Input('is-favorite') isFavorite = true;
  @Input() isFavorite = true; // Now this will become a property for <app-favourite> using app component
  // now its exposed to an outside any one can apply

  // marked as output properties - custom events
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}

export interface EventArgs {
  newValue: boolean
}
