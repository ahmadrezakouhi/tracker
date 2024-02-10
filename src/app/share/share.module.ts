import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCasePipe } from './camel-case.pipe';




@NgModule({
  declarations: [

          CamelCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[

    CamelCasePipe
  ]
})
export class ShareModule { }
