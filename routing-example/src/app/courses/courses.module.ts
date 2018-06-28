import {NgModule} from "@angular/core";
import {CoursesComponent} from "./courses.component";
import {CoursesListComponent} from "./courses-list/courses-list.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {CoursesRoutingModule} from "./courses.routing.module";


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseDetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule
  ]
})

export class CoursesModule {}
