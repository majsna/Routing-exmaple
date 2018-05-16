import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  contactForm: FormGroup;
  courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];

  ngOnInit() {
    this.contactForm = new FormGroup({
      topic: new FormControl('ropo'),
      message: new FormControl(null),
      name: new FormControl(null),
      email: new FormControl(null),
      course: new FormControl(this.courses[3]),
      bot: new FormControl(),
    });
  }

}

class ReactiveMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course = 'Angular',
    public bot?: boolean) {
  }
}
