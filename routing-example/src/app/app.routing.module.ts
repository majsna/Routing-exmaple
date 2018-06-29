import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AboutModule} from "./about/about.module";
import {CoursesModule} from "./courses/courses.module";
import {HomeModule} from "./home/home.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {SecretModule} from "./secret/secret.module";
import {AuthModule} from "./auth/auth.module";

//routing lazy loading
const appRoutes: Routes = [

  // { path: '', loadChildren: './home/home.module#HomeModule'},
  // { path: 'courses', loadChildren: './courses/courses.module#CoursesModule'},
  // { path: 'about', loadChildren: './about/about.module#AboutModule'},
  // { path: 'login', loadChildren: './auth/auth.module#AuthModule'},
  // { path: 'secret', loadChildren: './secret/secret.module#SecretModule'},
  // { path: 'not-found', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'},
  // { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [
    AboutModule,
    HomeModule,
    CoursesModule,
    AuthModule,
    SecretModule,
    PageNotFoundModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
