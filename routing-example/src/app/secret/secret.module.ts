import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {SecretComponent} from "./secret.component";
import {Level1Component} from "./level1/level1.component";
import {Level2Component} from "./level2/level2.component";
import {SecretRoutingModule} from "./secret.routing.module";


@NgModule({
  declarations: [
    SecretComponent,
    Level1Component,
    Level2Component
  ],
  imports: [
    SharedModule,
    CommonModule,
    SecretRoutingModule
  ]
})
export class SecretModule {}
