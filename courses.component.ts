import { CourseService } from './courses.service';
import { Component } from "@angular/core";

@Component({
  selector: 'courses', // <courses>
  // String Interpolation and we can use ` for multiple lines
  template: `
    <h2>{{ "Title:" + title + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})

export class CoursesComponent {
  title = "List Of Courses";
  // courses = ["course1",'course2','course3']
  courses;

  // This is called dependency injection --> dependency/service is decoupled with the component.
  // Whenever add any or more parameters into the service part, this will never affect the component.
  // This will instruct the Angular to create the instance of (inject/providing) the [dependency of the class]/service and pass into the its component
  constructor(service: CourseService) {
    // This will have a problem because this will be tightly coupled with
    // this component and this make an object in every time whenever be called.
    // As well as in unit testing, the component cannot be individually checked.
    // let service = new CourseService();
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  // Problems we face on HTTP Service calling
  // 1. It would make dependent part for the component and tightly coupled with it. It cannot be resusable.
  // 2. Reductant of the logic in multiple places.
  // 3. Presentation and Data Logic should be separate one.
}
