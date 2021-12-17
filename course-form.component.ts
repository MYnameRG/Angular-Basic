import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  form = new FormGroup({
    course: new FormArray([]) // Abstract type array contains only declaration
  });

  addTheCourse(course: HTMLInputElement) {
    // Inheritance as-a relationship
    (this.form.get('course') as FormArray).push(new FormControl(course.value));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
