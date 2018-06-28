import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutModule} from "./about/about.module";
import {CoursesModule} from "./courses/courses.module";
import {HomeModule} from "./home/home.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {SecretModule} from "./secret/secret.module";
import {AuthModule} from "./auth/auth.module";

const appRoutes: Routes = [];

@NgModule({
  imports: [
    AboutModule,
    HomeModule,
    CoursesModule,
    AuthModule,
    SecretModule,
    PageNotFoundModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
