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
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {LoginComponent} from "./auth/login/login.component";
import {AuthService} from "./auth/auth.service";

const config = {
  apiKey: "AIzaSyBT1TV_SRNkVROrIbIJ-AUh84BtVSv-WCg",
  authDomain: "auth-a9d3c.firebaseapp.com",
  databaseURL: "https://auth-a9d3c.firebaseio.com",
  projectId: "auth-a9d3c",
  storageBucket: "auth-a9d3c.appspot.com",
  messagingSenderId: "1063261811464"
};

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
    ReactiveFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [DataBaseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
