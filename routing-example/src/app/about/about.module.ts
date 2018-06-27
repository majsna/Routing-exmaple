import {NgModule} from "@angular/core";
import {AboutComponent, TemplateDrivenFormComponent, ReactiveFormComponent} from './index';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AboutRoutingModule} from "./about.routing.module";

@NgModule({
  declarations: [
    AboutComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AboutRoutingModule
  ]
})
export class AboutModule {}
