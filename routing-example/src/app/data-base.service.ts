import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class DataBaseService {

  COURSES = [
    new Course('1', 'JavaFX Course', 'JavaFX description...'),
    new Course('2', 'OrmLite Course', 'OrmLite description...'),
    new Course('3', 'Java 8 Course', 'Java 8 description...'),
    new Course('4', 'Angular Course', 'Angular description...'),
  ]

  getCourses(): Observable<Array<Course>> {
    return Observable.of(this.COURSES);
  }

  getCourseById(id: string): Course {
    return this.COURSES.find( c => c.id === id);
  }

  getRandomCourse() {
    const n = Math.floor(Math.random() * 3);
    return this.COURSES[n];
  }

}

export class Course {
  constructor(public id: string, public title: string, public content: string) {
  }
}
