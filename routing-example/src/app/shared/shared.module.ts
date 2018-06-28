import {NgModule} from "@angular/core";
import {InfoComponent} from "./info/info.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [InfoComponent],
  imports: [],
  exports: [
    InfoComponent,
    FormsModule
  ]
})
export class SharedModule {}
