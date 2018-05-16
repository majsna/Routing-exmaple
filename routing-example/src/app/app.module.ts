import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {CoursesComponent} from './courses/courses.component';
import {AppRoutingModule} from "./app.routing.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DataBaseService} from "./data-base.service";
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CoursesListComponent} from "./courses/courses-list/courses-list.component";
import {TemplateDrivenFormComponent} from "./about/template-driven-form/template-driven-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReactiveFormComponent} from "./about/reactive-form/reactive-form.component";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CoursesComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
