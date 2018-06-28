import {PageNotFoundComponent} from "./page-not-found.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const pageNotFoundRouting: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(pageNotFoundRouting)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule {}
