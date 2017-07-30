import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
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
          localStorage.setItem('currentUserToken',token);
          alert('Signin sucessfully');
          this.router.navigate(['/recipes']);
        });
      });
  }

  getToken(){
    return localStorage.getItem('currentUserToken');
  }

  logOut(){
    firebase.auth().signOut();
    localStorage.removeItem('currentUserToken');
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    return localStorage.getItem('currentUserToken') != null;
  }

  getCurrentUserId(){
    return firebase.auth().currentUser.uid;
  }  
}
