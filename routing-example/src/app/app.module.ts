import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CoursesComponent} from './courses/courses.component';
import {AppRoutingModule} from "./app.routing.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DataBaseService} from "./data-base.service";
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CoursesListComponent} from "./courses/courses-list/courses-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {LoginComponent} from "./auth/login/login.component";
import {AuthService} from "./auth/auth.service";
import {SecretComponent} from "./secret/secret.component";
import {AuthGuardsService} from "./auth/auth-guards.service";
import {Level1Component} from "./secret/level1/level1.component";
import {Level2Component} from "./secret/level2/level2.component";
import {AboutModule} from "./about/about.module";

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
    HomeComponent,
    CoursesComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    CoursesListComponent,
    LoginComponent,
    SecretComponent,
    Level1Component,
    Level2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AboutModule
  ],
  providers: [DataBaseService, AuthService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
