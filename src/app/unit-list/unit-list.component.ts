import { Component, NgIterable, OnDestroy, OnInit } from '@angular/core';

import { UnitService } from './unit.service';
import { Unit, UnitsResponse } from 'src/proto/unit-manager-unit.pb';



@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {
 units?:Unit.AsObject[]=[];
 totalCount:number = 0;
 isCheckAll : boolean = false;
 filterTitle:string = '';

  constructor(private unitService :UnitService){

  }

  checkAllCheckBox(){
    this.isCheckAll = !this.isCheckAll;
  }

  ngOnInit(): void {
   this.unitService.getUnits().subscribe(
      res=>{
        this.units = res.toJSON().units;
        console.log(res.toJSON().units);
        this.totalCount = res.toJSON().totalCount;
      }
      )
     
      
  }

 
}
