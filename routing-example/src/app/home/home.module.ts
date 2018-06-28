import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {HomeModuleRouting} from "./home.module.routing";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeModuleRouting
  ]
})

export class HomeModule {}
