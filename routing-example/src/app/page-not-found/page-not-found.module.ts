import {NgModule} from "@angular/core";
import {CoursesRoutingModule} from "../courses/courses.routing.module";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {PageNotFoundComponent} from "./page-not-found.component";


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule
  ]
})
export class PageNotFoundModule {}
