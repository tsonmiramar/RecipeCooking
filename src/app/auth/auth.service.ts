import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private currentUserToken: string = '';
  constructor(private router: Router) { }

  signUpUser(email:string, password:string){
    return firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((response: Response)=>{
        console.log(response);
        alert('Sucessfully signup a user!');
        this.router.navigate(['/signin']);
    });
  }

  signInUser(email:string, password:string){
    return firebase.auth().signInWithEmailAndPassword(email,password)
      .then((response: any)=>{
        console.log(response);
        firebase.auth().currentUser.getIdToken().then((token: string)=>{
          this.currentUserToken = token;
        });

        alert('Signin sucessfully');
        this.router.navigate(['/recipes']);
      });
  }

  getToken(){
    firebase.auth().currentUser.getIdToken().then((token: string)=>{
      this.currentUserToken = token;
    })

    return this.currentUserToken;
  }
}
