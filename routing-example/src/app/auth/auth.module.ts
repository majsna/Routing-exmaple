import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth.routing.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {}
