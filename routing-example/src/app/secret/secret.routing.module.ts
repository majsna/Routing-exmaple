import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuardsService} from "../auth/auth-guards.service";
import {Level1Component} from "./level1/level1.component";
import {SecretComponent} from "./secret.component";
import {Level2Component} from "./level2/level2.component";

const secretRouting: Routes = [
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
  }
]
@NgModule({
  imports: [RouterModule.forChild(secretRouting)],
  exports: [RouterModule]
})
export class SecretRoutingModule {}
