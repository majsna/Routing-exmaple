import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CoursesListComponent} from "./courses-list/courses-list.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CoursesComponent} from "./courses.component";

const courseRouting: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesListComponent
      },
      {
        path: ':id',
        component: CourseDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(courseRouting)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
