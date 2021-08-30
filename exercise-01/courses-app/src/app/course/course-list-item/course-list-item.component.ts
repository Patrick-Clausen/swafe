import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/models/src/src/app';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {

  @Input() course: Course = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
