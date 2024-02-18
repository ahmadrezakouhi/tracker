import { Injectable } from '@angular/core';
import { SignInRequest } from 'src/proto/user.pb';
import { UserServiceClient } from 'src/proto/user.pbsc';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private token = '';
  constructor(private userServiceClient:UserServiceClient) { }


  signIn(email:string,password:string){
    return this.userServiceClient.signIn(new SignInRequest({email:email,password:password,serverAddress:''})).subscribe(
      res => this.token = res.toJSON().token
    );
  }

isLoggedIn(){
  return this.token !== '' ? true : false; 
}

}
