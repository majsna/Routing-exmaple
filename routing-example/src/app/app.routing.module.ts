import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CoursesComponent} from "./courses/courses.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CourseDetailComponent} from "./courses/course-detail/course-detail.component";
import {CoursesListComponent} from "./courses/courses-list/courses-list.component";
import {LoginComponent} from "./auth/login/login.component";
import {SecretComponent} from "./secret/secret.component";
import {AuthGuardsService} from "./auth/auth-guards.service";
import {Level1Component} from "./secret/level1/level1.component";
import {Level2Component} from "./secret/level2/level2.component";
import {AboutModule} from "./about/about.module";
import {CoursesModule} from "./courses/courses.module";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'secret',
    component: SecretComponent,
    // canActivate: [AuthGuardsService],
    canActivateChild: [AuthGuardsService],
    children: [
      {
      path: 'level1',
        component: Level1Component
      },
      {
        path: 'level2',
        component: Level2Component
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [AboutModule, CoursesModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
