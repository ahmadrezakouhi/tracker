import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UnitListModule } from './unit-list/unit-list.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UnitListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
