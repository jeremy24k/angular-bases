import { NgModule } from "@angular/core";
import { counterComponent } from "./component/counter.component";


@NgModule ({
  declarations: [
    counterComponent
  ],
  
  exports: [
    counterComponent
  ]
})

export class counterModule {}


