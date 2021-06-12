
import { Component } from '@angular/core';
import {CoursesService} from './courses.service'
@Component({
    selector: 'courses',
    template: `
                <h2>{{ title }}</h2>
                <ul>
                    <li *ngFor="let c of coursesList">
                        {{ c }}
                    </li>
                </ul>
                `
})
export class CoursesComponent{
  title = "List of courses";
  coursesList;

  constructor(service: CoursesService){
      this.coursesList = service.getCourses();
  }
}