import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list.component';
import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UnitListComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule
  ],
  exports:[
    UnitListComponent
  ]
})
export class UnitListModule { }
