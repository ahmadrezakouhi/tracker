import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UnitListComponent } from './unit-list/unit-list.component';

const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'units', component : UnitListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
