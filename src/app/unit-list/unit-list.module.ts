import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    UnitListComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    UnitListComponent
  ]
})
export class UnitListModule { }
