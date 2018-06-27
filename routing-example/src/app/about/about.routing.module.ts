import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
// import {AboutComponent} from "./about.component";
import {AboutComponent} from "./index";


const aboutRouting: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(aboutRouting)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
