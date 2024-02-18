import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UnitListModule } from './unit-list/unit-list.module';
import { ShareModule } from './share/share.module';
import { GrpcCoreModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UnitListModule,
    FormsModule,
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings:{ host:'http://localhost:8080'}
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
