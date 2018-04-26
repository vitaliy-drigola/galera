
import {NgModule} from "@angular/core";
import {FindComponent} from "./find/find.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FindComponent
  ]
})
export class SearchModule { }

