import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCasePipe } from './camel-case.pipe';
import { FilterPipe } from './filter.pipe';





@NgModule({
  declarations: [

          CamelCasePipe,
           FilterPipe,

  ],
  imports: [
    CommonModule
  ],
  exports:[

    CamelCasePipe,
    FilterPipe
  ]
})
export class ShareModule { }
