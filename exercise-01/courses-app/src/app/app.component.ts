import { Component } from '@angular/core';
import { Course } from 'projects/models/src/src/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';

  courseArray: Course[] = [
    {
      name: "SWAFE", code: "somecode", ects: 5
    },
    {
      name: "SWAPK", code: "someothercode", ects: 10
    }
  ]
}
