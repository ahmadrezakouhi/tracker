import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthService){

  }

  onSubmitForm(form:NgForm){
    if(!form.valid){
      return ;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email,password);
    form.reset();

  }
}
