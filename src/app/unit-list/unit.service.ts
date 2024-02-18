import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit, UnitsRequest, UnitsResponse } from 'src/proto/unit-manager-unit.pb';
import { UnitManagementServiceClient } from 'src/proto/unit-manager-unit.pbsc';


@Injectable({
  providedIn: 'root'
})
export class UnitService {
  

  constructor(
    private unitManagementServiceClient: UnitManagementServiceClient) { }

  getUnits(){
    return this.unitManagementServiceClient.units(new UnitsRequest({}));
  }
}
