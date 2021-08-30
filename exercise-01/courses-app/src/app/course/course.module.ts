import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { ModelsModule } from 'projects/models/src/src/app';



@NgModule({
  declarations: [
    CourseListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseListItemComponent
  ]
})
export class CourseModule { }
